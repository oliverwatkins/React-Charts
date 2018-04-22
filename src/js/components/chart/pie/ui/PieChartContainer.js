import React from "react";

import {Component} from 'react';

import SimplePieChart from "./PieChartComponent";
import PieChartForm from "./PieChartForm";
import PieChartSliceList from "./PieChartSliceList";

import { connect } from 'react-redux'


import {deleteSlice, changeNamePie} from '../duck';


class PieChartPage extends Component {

  constructor(props) {
    super(props)

    this.onDeleteSlice = this.onDeleteSlice.bind(this);
    // this.onDeleteSlice = this.onDeleteSlice.bind(this);
  }

  onDeleteSlice(event, categoryName, index) {
    event.preventDefault();
    this.props.deleteSlice(categoryName, index);
  }

  render() {

    return (
      <div>
        <h1>Pie Chart</h1>
        <div className="alert alert-danger">
          <strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.
        </div>
        <div className="col-md-5">
          <PieChartForm pieData={this.props.pieData} />
        </div>
        <div className="col-md-5">
          <PieChartSliceList data={this.props.pieData.data} deleteSlice={this.onDeleteSlice}/>
        </div>
        <div className="col-md-5">
          <SimplePieChart pieData={this.props.pieData} onLoadChart={this.onLoadChart} />
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
    changePieChartName: (val) => {
      dispatch(changeNamePie(val))
    },
    deleteSlice: (val) => {
      dispatch(deleteSlice(val))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartPage)