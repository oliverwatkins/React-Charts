import React from "react";

import ColorChooser from '../ColorChooser'
import { connect } from 'react-redux'

import {updateColor} from '../../../ActionsRedux'



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

    let props = this.props;

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
                         props.colorSelected('sausage is nice')


                         /*colorSelected(color, slice.name)*/
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



const mapStateToProps = state => {
  return {
    pieData: state.app.pie.data
  }
}

//depreacated
// function colorSelected(color, seriesName) {
//   Actions.updateColor(color, seriesName)
// }

const mapDispatchToProps = dispatch => {
  return {
    colorSelected: (color, seriesName )=> {

      console.info('in color selected')
      let a = updateColor(color, seriesName)
      dispatch(a);

      // alert('hello hello')
      // dispatch(toggleTodo(id))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartSliceList)



