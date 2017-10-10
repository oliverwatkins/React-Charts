import React from "react";

import ColorChooser from '../ColorChooser'
import { connect } from 'react-redux'



class PieChartSliceList extends React.Component {
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

    let pieData = this.props.pieData
    return (
      <table className="table">
        <tbody>
        {pieData.map(function (slice, i) {
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

const mapDispatchToProps  = state => {
  return {
    blah: () => alert()
  }
}


const mapStateToProps = state => {
  return {
    pieData: state.app.pie.data
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartSliceList)


function colorSelected(color, seriesName) {
  Actions.updateColor(color, seriesName)
}
