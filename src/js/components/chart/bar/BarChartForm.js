import React from "react";
import TitleEditComponent from '../TitleEditComponent'
import ColorChooser from '../ColorChooser'
import Actions from "../../../../js/Actions";

export default class XYChartForm extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.colorSelected = this.colorSelected.bind(this);

    this.state = {
      showModalColorPicker: false
    };
  }

  handleChartNameChange(event) {
    Actions.changeLineChartName(event.currentTarget.value);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TitleEditComponent onChange={this.handleChartNameChange}/>

        <div className="css-form">
          <div className="col-xs-10">
            <div className="col-xs-9">
              <h3>Add Series Here :</h3>
            </div>
          </div>
          <div className="input-group col-xs-9">
                        <span className="input-group-addon">
                            <i className="glyphicon glyphicon-user"></i></span>
            <input type="text" ref="sliceName" className="form-control" onChange={this.handleChartSliceChange}
                   name="newSlice" placeholder="Series Name"></input>
          </div>

          <ColorChooser onChooseColor={this.colorSelected}/>
          <button type="submit" value="Add Slice" className="button">Add Series</button>
        </div>
      </form>
    )
  }


  handleSubmit(event) {
    event.preventDefault();

    // const val = ReactDOM.findDOMNode(this.refs.sliceName).value;
    // const color = ReactDOM.findDOMNode(this.refs.color).value;
    // const value = parseInt(ReactDOM.findDOMNode(this.refs.value).value);
    //
    // var slice = {
    //   name: val,
    //   color: color,
    //   value: value
    // }
    // PieChartActions.createSlice(slice);
  }


}