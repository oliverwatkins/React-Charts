import React from "react";

export default class PieChartSliceList extends React.Component {
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

    return (
      <table className="table">
        <tbody>
        {this.props.app.pie.data.map(function (slice, i) {
          var key = 'xx_' + i;

          var style = {
            color: 'black',
            background: slice.color
          };

          return (
            <tr key={key}>
              <td>
                {slice.name}
              </td>
              <td>
                {slice.value}
              </td>
              <td style={style}>
                {slice.color}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}
