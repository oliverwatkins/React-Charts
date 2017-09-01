import React from "react";

import BarChartEntity from "../../../../js/entity/BarChartEntity";

import './List.less';


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
    const series = BarChartEntity.getSeries(this.props.app);
    return (
    <div className="listStyle">
      <table>
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
              <td>
                <input type="button" value="delete"/>
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
