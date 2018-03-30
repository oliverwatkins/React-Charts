import React from "react";

import ColorChooser from '../ColorChooser'

import BarChartEntity from "./BarChartEntity";

import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import './List.less';

class BarSeriesList extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    deleteSeries: PropTypes.func.isRequired,
    colorSelected: PropTypes.func.isRequired,
    barData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFetching: PropTypes.bool.isRequired,
        categories: PropTypes.array.isRequired,
        series: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          data: PropTypes.arrayOf(PropTypes.shape({
              y: PropTypes.number.isRequired
            })
          ),
        }))
      }
    )
  };

  render() {
    let barData = this.props.barData; //pass through
    const series = BarChartEntity.getSeries2(barData);
    // console.info(JSON.stringify(barData))

    let deleteSeries = this.props.deleteSeries;
    let colorSelected = this.props.colorSelected;

    return (
      <MuiThemeProvider>
        <div className="listStyle">
          <table>
            <tbody>
            {series.map(function (series, i) {
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
                                      colorSelected(color, series.name)
                                    }
                                  }
                    />
                  </td>
                  <td>
                    <FlatButton label="Delete" secondary={true}
                                onClick={
                                  (e) => deleteSeries(series.name)}/>
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

export default BarSeriesList;




