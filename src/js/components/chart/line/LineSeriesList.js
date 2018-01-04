import React from "react";

import BarChartEntity from "../../../../js/entity/BarChartEntity";
import Actions from "../../../../js/ActionsRedux";

import XYChartEntity from "./XYChartEntity";

import './List.less';


export default class LineSeriesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // SlicesStore.on("change", this.getSlices);
  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getSlices);
  }

  deleteSeries(event, seriesName) {
    event.preventDefault();
    alert('todo')
    Actions.deleteSeries(seriesName);
  }

  render() {

    const series = XYChartEntity.getSeries(this.props.app);

    let deleteS = this.deleteSeries;

    return (
      <div className="listStyle">
        <table>
          <tbody>
          {this.props.app.xy.series.map(function (series, i) {
            var key = 'xx_' + i;
            var style = {
              color: 'black',
              background: series.color
            };
            return (
              <tr key={key}>
                <td>
                  {series.name}
                </td>
                <td style={style}>
                  {series.color}
                </td>
                <td>
                  <input type="button" value="delete"
                         onClick={(e) => deleteS(e, series.name)}
                  />
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}
