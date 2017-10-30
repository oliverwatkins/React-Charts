import React from "react";

import ColorChooser from '../src/js/components/chart/ColorChooser'

import BarChartEntity from "../src/js/entity/BarChartEntity";
import Actions from "../src/js/ActionsRedux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import '../src/js/components/chart/bar/List.less';

import { connect } from 'react-redux'
import {} from '../../../ActionsRedux'

import {deleteSeries, updateColorBar} from '../../../ActionsRedux'


class BarSeriesListTest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="here"/>
    )
  }

  // render() {
  //   let barData = this.props.barData;
  //   // console.log('hey mate did you render')
  //   return (
  //     <div>
  //       <div className="unique"/>
  //       <ul>
  //         {barData.map(function (series, i) {
  //           return (
  //             <li key={key}>
  //               {series.name}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  // }
}
// export default BarSeriesListTest;
const mapStateToProps = state => {
  return {
    barData: state.app.bar
  }
}

export default connect(
  mapStateToProps
)(BarSeriesListTest)
