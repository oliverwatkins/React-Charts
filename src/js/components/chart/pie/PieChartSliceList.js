import React from "react";

import ColorChooser from '../ColorChooser'

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
              <td>
                <ColorChooser color={slice.color}
                                   onChooseColor={
                                     (color) => {
                                       colorSelected(color, slice.name)
                                     }
                                   }/>

              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}

function colorSelected(color, seriesName) {
  Actions.updateColor(color, seriesName)
}
