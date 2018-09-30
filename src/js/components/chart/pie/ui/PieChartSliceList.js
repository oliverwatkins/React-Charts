import React from "react";

import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import ColorChooser from '../../ColorChooser'


export default class PieChartSliceList extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteSlice = this.deleteSlice.bind(this);

  }
  // deleteSlice(event, categoryName, index) {
  //   event.preventDefault();
  //   this.props.deleteSlice(categoryName, index);
  // }


  componentWillMount() {
    // SlicesStore.on("change", this.getSlices);
  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getSlices);
  }


  static propTypes = {
    deleteSlice: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    }))
  };


//   series: PropTypes.arrayOf(PropTypes.shape({
//                                               name: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   data: PropTypes.arrayOf(PropTypes.shape({
//                                             y: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// })
// ),
// }))
  render() {
    let deleteS = this.props.deleteSlice;
    let props = this.props;
    let pieData = this.props.data;
    return (
      <MuiThemeProvider>
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
                                    props.colorSelected(color, slice.name)
                                  }
                                }/>
                </td>
                <td>
                  <FlatButton label="Delete" secondary={true}
                              onClick={
                                (e) => deleteS(e, slice.name, i)}/>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </MuiThemeProvider>
      );
  }
}
