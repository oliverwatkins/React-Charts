import React from "react";

import AppStore from "../../../../js/AppStore";
import LineChart from "../../../../js/entity/LineChart";



export default class BarSeriesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // SlicesStore.on("change", this.getSlices);
  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getSlices);
  }

  render() {


    const series = LineChart.getSeries(this.props.app);

    return (
      <table className="table">
        <tbody>

        {this.props.app.line.series.map(function (series, i) {

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
            </tr>
          );
        })}

        </tbody>
      </table>
    );
  }
}