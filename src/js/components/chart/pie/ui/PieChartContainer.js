import React, {Component} from "react";

import PieChart from "./PieChartPanel";
import PieChartForm from "./PieChartForm";
import PieChartSliceList from "./PieChartSliceList";
import TitleEditComponent from "./../../TitleEditComponent"
import {connect} from 'react-redux'
import {createChangeNamePieAction, createCreateSliceAction, createDeleteSliceAction, createFetchPieDataAction, createChangePieSliceColorAction} from '../duck';

/**
 * container
 */
class PieChartContainer extends Component {

  constructor(props) {
    super(props)
    this.onDeleteSlice = this.onDeleteSlice.bind(this);
    this.onChangeNamePie = this.onChangeNamePie.bind(this);
    this.onCreateSlice = this.onCreateSlice.bind(this);
    this.onLoadChart = this.onLoadChart.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
  }

  onCreateSlice(event, categoryName, index) {
    event.preventDefault();
    this.props.createSlice(categoryName, index);
  }

  onChangeColor(name, newColor) {
    // event.preventDefault();
    this.props.changeColor(name, newColor);
  }

  onDeleteSlice(event, categoryName, index) {
    event.preventDefault();
    this.props.deleteSlice(categoryName, index);
  }

  onChangeNamePie(event, categoryName, index) {
    event.preventDefault();
    this.props.changePieChartName(categoryName, index);
  }

  onLoadChart(val) {
    this.props.onLoadChart(val);
  }

  render() {
    return (
      <div>
        {/*<h1>Pie Chart</h1>*/}
        {/*<div className="alert alert-danger">*/}
          {/*<strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.*/}
        {/*</div>*/}
        <div className="col-md-5">
          <TitleEditComponent value={this.props.pieData.name} onChange={this.handleChartNameChange}/>
        </div>
        <div className="col-md-5">
          <PieChartForm pieData={this.props.pieData} createSlice={this.onCreateSlice}/>
        </div>
        <div className="col-md-5">
          <PieChartSliceList data={this.props.pieData.data} deleteSlice={this.onDeleteSlice} colorSelected={this.onChangeColor}/>
        </div>
        <div className="col-md-5">
          <PieChart pieData={this.props.pieData} onLoadChart={this.onLoadChart} />
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
      dispatch(createChangeNamePieAction(val))
    },
    changeColor: (color, sliceName, idx) => {

      dispatch(createChangePieSliceColorAction(color, sliceName,  idx))
    },
    deleteSlice: (val, idx) => {
      dispatch(createDeleteSliceAction(val, idx))
    },
    createSlice: (val, idx) => {
      dispatch(createCreateSliceAction(val, idx))
    },
    onLoadChart: () => {
      dispatch(createFetchPieDataAction());
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PieChartContainer)