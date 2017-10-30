import React from "react";

import ColorChooser from '../ColorChooser'

import BarChartEntity from "../../../../js/entity/BarChartEntity";
import Actions from "../../../../js/ActionsRedux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import './List.less';

import { connect } from 'react-redux'
import {} from '../../../ActionsRedux'

import {deleteSeries, updateColorBar} from '../../../ActionsRedux'


class BarSeriesList extends React.Component {
  constructor(props) {
    super(props);
    this.colorSelected = this.colorSelected.bind(this);
    this.deleteSeries = this.deleteSeries.bind(this);
  }

  colorSelected(color, seriesName) {
    this.props.updateColorBar(color, seriesName)
  }

  componentWillMount() {
    // SlicesStore.on("change", this.getSlices);
  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getSlices);
  }

  deleteSeries(event, seriesName) {
    event.preventDefault();
    this.props.deleteSeries(seriesName);
  }

  render() {

    let barData = this.props.barData;

    const series = BarChartEntity.getSeries2(barData);

    console.info(JSON.stringify(barData))

    let deleteS = this.deleteSeries;

    let self = this;

    return (
      <MuiThemeProvider>


      <div className="listStyle">
        <table>
          <tbody>
          {series.map(function (series, i) {

            console.info('in render: series name = ' + series.name + ' color ' + series.color)


            var key = 'xx_' + i;
            return (
              <tr key={key}>
                <td>
                  {series.name}
                </td>
                <td>

                  <ColorChooser color={series.color}
                                onChooseColor={
                                  (color) => {
                                    self.colorSelected(color, series.name)
                                  }
                                }/>
                </td>
                <td>
                  <FlatButton label="Delete" secondary={true}
                              onClick={(e) => deleteS(e, series.name)}/>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    barData: state.app.bar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteSeries: (value) => {
      dispatch(deleteSeries(value))
    },
    updateColorBar: (value) => {
      dispatch(updateColorBar(value))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarSeriesList)
