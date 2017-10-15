import React from "react";

import Actions from "../../../../js/Actions";
import TitleEditComponent from '../TitleEditComponent'
import ColorChooser from '../ColorChooser'


import ReactDOM from "react-dom";

import MUITextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { connect } from 'react-redux'

import {changeNamePie} from '../../../ActionsRedux'



class PieChartForm extends React.Component {
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

    let pieData = this.props.pieData;

    return (
    <MuiThemeProvider>
      <form onSubmit={this.handleSubmit}>

        <TitleEditComponent value={pieData.name} onChange={this.handleChartNameChange}/>

        <div>
          <div>
              <h3>Add Sections Here :</h3>
          </div>
            <MUITextField type="text" ref="sliceName"
                   name="newSlice" placeholder="Add Pie Slice Name"></MUITextField>

            <MUITextField type="number" ref="value"
                   name="newValue" placeholder="Add value"></MUITextField>

          <ColorChooser onChooseColor={this.colorSelected}/>

          <button type="submit" value="Add Slice" className="button">Add Slice</button>
        </div>
      </form>
    </MuiThemeProvider>
    );
  }
}




const mapStateToProps = state => {
  return {
    pieData: state.app.pie.data
  }
}


const mapDispatchToProps = dispatch => {
  return {
    changeName: (newName)=> {
      dispatch(changeNamePie(newName));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartForm)