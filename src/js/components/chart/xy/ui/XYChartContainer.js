import React from "react";

import LineChartComponent from "./LineChartComponent";

import { connect } from 'react-redux'

import {makeXYDataSelector} from "../selectors"

import {changeXYChartName, fetchXYData, deleteXYSeries,
  updateColorXY, createXYSeries, changeCellXY
} from '../duck';

import XYChartSeriesComponent from "./XYChartSeriesComponent"
import TitleComponent from '../../TitleComponent'

class XYChartContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleChartNameChange = this.handleChartNameChange.bind(this);
    this.handleDeleteXYSeries = this.handleDeleteXYSeries.bind(this);
    this.handleUpdateColorXY = this.handleUpdateColorXY.bind(this);
    this.handleCreateXYSeries = this.handleCreateXYSeries.bind(this);
    this.handleChangeCell = this.handleChangeCell.bind(this);
    this.onLoadChart = this.onLoadChart.bind(this);
  }

  handleChartNameChange(val, event) {
    this.props.changeXYChartName(val);
  }

  handleDeleteXYSeries(val, event) {
    this.props.deleteXYSeries(val);
  }

  handleUpdateColorXY(val, name) {
    this.props.updateColorXY(val, name);
  }

  handleCreateXYSeries(val) {
    this.props.createXYSeries(val);
  }

  handleChangeCell(val) {
    this.props.changeCellXY(val);
  }

  onLoadChart(val, event) {
    this.props.onLoadXYChart(val);
  }


  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    }

    // let XYChartSeriesComponent = <h3>Blahhhhh</h3>;

    return (
      <div>

        <h1>XY Chart</h1>

        <div className="alert alert-danger">
          <strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.
        </div>


        <div style={{display: 'flex'}}>
          <div>
            <div style={style}>
              Title here
              {/*<TitleEditComponent onChange={this.handleChartNameChange}/>*/}
              {/*<div>*/}
                {/*<LineChartForm {...this.state}/>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<LineSeriesList {...this.state}/>*/}
              {/*</div>*/}
            </div>

            <div>
              <XYChartSeriesComponent
                xySeries={this.props.xyData.series}
                changeCellXY={this.handleChangeCell}
                createXYSeries={this.handleCreateXYSeries}
                deleteXYSeries={this.handleDeleteXYSeries}
              />
            </div>

          </div>
          <div>
            <LineChartComponent/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const getXYData = makeXYDataSelector(state)
  return {
    xyData: getXYData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeXYChartName: (val) => {
      dispatch(changeXYChartName(val))
    },
    onLoadChart: () => {
      dispatch(fetchXYData());
    },
    deleteXYSeries: (value) => {
      dispatch(deleteXYSeries(value))
    },
    updateColorXY: (colorValue, seriesName) => {
      dispatch(updateColorXY(colorValue, seriesName))
    },
    createXYSeries: (series) => {
      dispatch(createXYSeries(series))
    },
    changeCellXY: (series, axis, row, value ) => {
      dispatch(changeCellXY({name:series.name, axis:series.axis, row: series.row, value: series.value}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XYChartContainer)

// export default XYChartPage;