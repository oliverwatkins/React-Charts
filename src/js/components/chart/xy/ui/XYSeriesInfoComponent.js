import React from "react";

import PropTypes from 'prop-types';

import MUITextField from 'material-ui/TextField';

import './List.less';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import ColorChooser from '../../ColorChooser';


export default class XYSeriesInfoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.colorSelected = this.colorSelected.bind(this);
    this.deleteSeries = this.deleteSeries.bind(this);
    this.pointChanged = this.pointChanged.bind(this);
  }

  static propTypes = {
    deleteSlice: PropTypes.func.isRequired,
    handleDeleteSeriesXY: PropTypes.func.isRequired,
    handleUpdatePointXY: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      seriesName: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      pointShape: PropTypes.string.isRequired

    }))
  };


  render() {
    let deleteSeries = this.props.deleteSeries;
    let seriesInfo = this.props.data;

    let style = {
      "padding": "3px",
      "margin": "3px",
      // "border": "5px solid blue"
    }
    return (

      <div>
        <table>
          <tbody>
          <tr>
          <td>
            <MUITextField
              id="enterSeriesNameField"
              style={{width:170}}
              hintText="Enter Series Name"
              type="text"
              ref="seriesName"
              // value={props.name}
              name="newSlice"
              onChange={this.onChangeText}
              data-rh="Bottom" data-rh-at="bottom" />
          </td>
          <td>
            <ColorChooser style={style} onChooseColor={this.colorSelected}/>
          </td>
          <td>

            <select onChange={this.pointChanged}>
              <option value="diamond">diamond</option>
              <option value="square">square</option>
              <option value="circle">circle</option>
              <option value="cross">cross</option>
            </select>


          </td>
            <td style={{padding:5}}>
              <FlatButton label="Delete" secondary={true}
                          onClick={
                            (e) => deleteSeries(e, seriesInfo.seriesName)}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

  pointChanged(e, pointValue, seriesName) {


    // {value: event.target.value}

    alert('ho' + e + " pointValue" + e.target.value)


    this.setState({selectedPoint: e.target.value});
    this.props.handleUpdatePointXY({point:e.target.value, seriesName:seriesName})
  }

  colorSelected(color, seriesName) {
    this.setState({selectedColor: color}); //local
    this.props.handleUpdateColorXY({value:color, seriesName:seriesName})
  }


  deleteSeries(seriesName) {
    this.props.handleDeleteSeriesXY({seriesName:seriesName})
  }
}




