import React from "react";

import {Component} from 'react';

import SimplePieChart from "./PieChartComponent";
import PieChartForm from "./PieChartForm";
import PieChartSliceList from "./PieChartSliceList";

import { connect } from 'react-redux'
import {changeNamePie} from '../../../ActionsRedux.js';


class PieChartPage extends Component {

  // static getStores() {
  //   return [AppStore];
  // }
  //
  // static calculateState(prevState) {
  //   return AppStore.getState();
  // }

  // handleChartNameChange(event) {
  //   var changeName = function(newName) {
  //     dispatcher.dispatch({
  //       type: "CHANGE_NAME",
  //       newName,
  //     });
  //   }
  //   changeName(event.currentTarget.value);
  // }

  render() {

    // alert("" + JSON.stringify(this.state))

    return (
      <div>
        <h1>Pie Chart</h1>
        <div className="alert alert-danger">
          <strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.
        </div>
        <div className="col-md-5">
          <PieChartForm pieData={this.props.pieData} {...this.state}/>
        </div>
        <div className="col-md-5">
          <PieChartSliceList pieData={this.props.pieData.series} {...this.state}/>
        </div>
        <div className="col-md-5">
          <SimplePieChart pieData={this.props.pieData.series} onLoadChart={this.onLoadChart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pieData: state.pie
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeBarChartName: (val) => {
      dispatch(changeNamePie(val))
    }
  }
}



// handleChartNameChange(event) {
//   var changeName = function(newName) {
//     dispatcher.dispatch({
//       type: "CHANGE_NAME",
//       newName,
//     });
//   }
//   changeName(event.currentTarget.value);
// }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartPage)


