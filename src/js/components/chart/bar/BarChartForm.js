import React from "react";
import ColorChooser from '../ColorChooser'
import Actions from "../../../../js/Actions";

import MUITextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ReactDOM from "react-dom";

import 'react-hint/css/index.css'

import RaisedButton from 'material-ui/RaisedButton';


import { connect } from 'react-redux'
import {} from '../../../ActionsRedux'


class BarChartForm extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.colorSelected = this.colorSelected.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    this.state = {
      enableButton:false,
      showModalColorPicker: false
    };
  }

  handleSubmit(event) {

    event.preventDefault();

    let val =  this.refs.seriesName.input.value

    let series = {
      name: val,
      color: this.state.selectedColor,
    };
    Actions.createSeries(series);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  onChangeText(e, value) {
    if (!value) {
      this.setState({enableButton: false});
    }else {
      this.setState({enableButton: true});
    }
  }

  render() {
    let enableButton = this.state.enableButton

    let style = {
      // "padding": "3px",
      "margin": "6px"
    }
    return (
      <MuiThemeProvider>

      <div style={style}>
        <h3>Series :</h3>
        <form onSubmit={this.handleSubmit}>

          <table>
            <tr>

            <td>

          <MUITextField
            style={{width:170}}
            hintText="Enter Series Name"
            type="text"
            ref="seriesName"
            name="newSlice"
            onChange={this.onChangeText}
            data-rh="Bottom" data-rh-at="bottom"
          />
            </td>
              <td>

          <ColorChooser
                        onChooseColor={this.colorSelected}/>
              </td>
          <td>

          <RaisedButton style={style}
                        type="submit"
                        label="Add Series"
                        disabled={!enableButton}
          />
                              </td>
          </tr>
          </table>
        </form>
      </div>

      </MuiThemeProvider>
    )
  }
}


const mapStateToProps = state => {
  return {
    barData: state.app.bar
  }
}
const mapDispatchToProps = state => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChartForm)

