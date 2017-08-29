import React from "react";

import Actions from "../../../../js/Actions";
import TitleEditComponent from '../TitleEditComponent'
import ColorChooser from '../ColorChooser'


import ReactDOM from "react-dom";

export default class PieChartForm extends React.Component {
  constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    // this.cancel = this.cancel.bind(this);
    // this.popupPicker = this.popupPicker.bind(this);

    this.colorSelected = this.colorSelected.bind(this);

    this.state = {
      selectedColor: '123123'
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const val = ReactDOM.findDOMNode(this.refs.sliceName).value;

    const color = this.state.selectedColor; //ReactDOM.findDOMNode(this.refs.color).value;

    const value = parseInt(ReactDOM.findDOMNode(this.refs.value).value);

    var slice = {
      name: val,
      color: this.state.selectedColor,
      value: value
    }
    Actions.createSlice(slice);
  }


  colorSelected(color) {
    alert('hi')
    this.setState({selectedColor: color});
  }

  // cancel(event) {
  //   this.setState({showModalColorPicker: false});
  // }
  //
  // chooseColor(event) {
  //   this.setState({showModalColorPicker: false, color: event.hex});
  // }
  //
  // popupPicker(event) {
  //   this.setState({showModalColorPicker: true});
  // }

  handleChartNameChange(event) {
    Actions.changeName(event.currentTarget.value);
  }

  render() {
    console.info('what is state : ' + this.state)

    return (
      <form onSubmit={this.handleSubmit}>
        <TitleEditComponent onChange={this.handleChartNameChange}/>

        <div className="css-form">
          <div className="col-xs-10">
            <div className="col-xs-9">
              <h3>Add Sections Here :</h3>
            </div>
          </div>
          <div className="input-group col-xs-9">
            <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i></span>
            <input type="text" ref="sliceName" className="form-control" onChange={this.handleChartSliceChange}
                   name="newSlice" placeholder="Add Pie Slice Name"></input>
          </div>

          <div className="input-group col-xs-9">
            <span className="input-group-addon">
            <i className="glyphicon glyphicon-plus"></i>
            </span>
            <input type="number" ref="value" className="form-control"
                   name="newValue" placeholder="Add value"></input>
          </div>

          <ColorChooser onChooseColor={this.colorSelected}/>

          <button type="submit" value="Add Slice" className="button">Add Slice</button>
        </div>
      </form>
    );
  }
}