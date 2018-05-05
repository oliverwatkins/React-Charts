import React from "react";

import ColorChooser from '../../ColorChooser'

import MUITextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class PieChartForm extends React.Component {

  constructor(props) {

    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.colorSelected = this.colorSelected.bind(this);

    this.state = {
      selectedColor: '#123123'
    };
  }

  handleSubmit(event) {

    let name =  this.refs.sliceName.input.value;
    let value =  this.refs.value.input.value;

    let slice = {
      name: name,
      color: this.state.selectedColor,
      value: value
    };

    this.props.createSlice(event, slice);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }
  render() {
    let pieData = this.props.pieData;
    return (
    <MuiThemeProvider>
      <form onSubmit={this.handleSubmit}>


        <div>
          <div>
              <h3>Add Sections Here :</h3>
          </div>
            <MUITextField id="newSliceField" type="text" ref="sliceName"
                   name="newSlice" placeholder="Add Pie Slice Name"></MUITextField>

            <MUITextField id="newValueField" type="number" ref="value"
                   name="newValue" placeholder="Add value"></MUITextField>

          <ColorChooser onChooseColor={this.colorSelected}/>

          <button type="submit" value="Add Slice" className="button">Add Slice</button>
        </div>
      </form>
    </MuiThemeProvider>
    );
  }
}