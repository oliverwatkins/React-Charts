import React from "react";

import Actions from "../../../../js/Actions";
import TitleEditComponent from '../TitleEditComponent'
import ColorChooser from '../ColorChooser'


import ReactDOM from "react-dom";

export default class PieChartForm extends React.Component {
  constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.colorSelected = this.colorSelected.bind(this);

    this.state = {
      selectedColor: '123123'
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const val = ReactDOM.findDOMNode(this.refs.sliceName).value;

    const value = parseInt(ReactDOM.findDOMNode(this.refs.value).value);

    var slice = {
      name: val,
      color: this.state.selectedColor,
      value: value
    }
    Actions.createSlice(slice);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  handleChartNameChange(event) {
    Actions.changeName(event.currentTarget.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <TitleEditComponent value={this.props.app.pie.name} onChange={this.handleChartNameChange}/>

        <div>
          <div>
              <h3>Add Sections Here :</h3>
          </div>
            <input type="text" ref="sliceName" onChange={this.handleChartSliceChange}
                   name="newSlice" placeholder="Add Pie Slice Name"></input>

            <input type="number" ref="value"
                   name="newValue" placeholder="Add value"></input>

          <ColorChooser onChooseColor={this.colorSelected}/>

          <button type="submit" value="Add Slice" className="button">Add Slice</button>
        </div>
      </form>
    );
  }
}