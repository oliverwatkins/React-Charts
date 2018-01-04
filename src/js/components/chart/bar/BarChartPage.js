import React from "react";

import BarChartComponent from "./BarChartComponent";
import BarSeriesList from "./BarSeriesList";
import BarChartForm from "./BarChartForm";
import BarChartDataTable from "./BarChartDataTable";
import CategoryForm from "./CategoryForm";

import CategoryDataList from "./CategoryDataList";

import { connect } from 'react-redux'
import {changeLineChartName, fetchBarData, deleteSeries, updateColorBar} from './duck';

import TitleEditComponent from "../TitleEditComponent";

//redux container
class BarChartPage extends React.Component {

  constructor(props) {
    super(props)
    this.handleChartNameChange = this.handleChartNameChange.bind(this);
    this.handleDeleteSeries = this.handleDeleteSeries.bind(this);
    this.handleUpdateColorBar = this.handleUpdateColorBar.bind(this);

    this.onLoadChart = this.onLoadChart.bind(this);
  }
  handleChartNameChange(val, event) {
    this.props.changeLineChartName(val);
  }
  handleDeleteSeries(val, event) {
    this.props.deleteSeries(val);
  }
  handleUpdateColorBar(val, name) {
    this.props.updateColorBar(val, name);
  }

  onLoadChart(val, event) {
    this.props.onLoadChart(val);
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    };

    return (
      <div>
        <div style={{display: 'flex'}}>
          <div>
            <div style={style}>
              <TitleEditComponent onChange={this.handleChartNameChange}/>
              <div>
                <BarChartForm {...this.state}/>
              </div>
              <div>
                <BarSeriesList {...this.state}
                               barData={this.props.barData}
                               deleteSeries={this.handleDeleteSeries}
                                colorSelected={this.handleUpdateColorBar}
                />
              </div>
            </div>
            <div style={style}>
              <div>
                <CategoryForm {...this.state}/>
              </div>
              <div>
                <CategoryDataList {...this.state}/>
              </div>
            </div>
          </div>
          <div>
          <div style={{width: 700, height: 200}}>
            <BarChartDataTable {...this.state}/>
          </div>
          <div>
            <BarChartComponent onLoadChart={this.onLoadChart} {...this.state}/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    barData: state.bar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLineChartName: (val) => {
      dispatch(changeLineChartName(val))
    },
    onLoadChart: () => {
      dispatch(fetchBarData());
    },
    deleteSeries: (value) => {
      dispatch(deleteSeries(value))
    },
    updateColorBar: (colorValue, seriesName) => {
      dispatch(updateColorBar(colorValue, seriesName))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChartPage)
