import React from "react";

import {Component} from 'react';

import SimplePieChart from "./PieChartComponent";
import PieChartForm from "./PieChartForm";
import PieChartSliceList from "./PieChartSliceList";

import { connect } from 'react-redux'

class PieChartPage extends Component {

  render() {

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartPage)