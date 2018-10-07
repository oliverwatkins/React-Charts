import React from "react";

import XYChartComponent from "./XYChartComponent";

import { connect } from 'react-redux'

import {makeXYDataSelector} from "../selectors"

import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import {createChangeCellXYAction, createFetchXYDataAction, createDeleteXYSeriesAction,
  createUpdateColorXYAction, createCreateXYSeriesAction, createChangeXYChartNameAction
} from '../duck';

import XYChartSeriesComponent from "./XYChartSeriesComponent"
import TitleComponent from '../../TitleComponent'
import TitleEditComponent from '../../TitleEditComponent'

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
    this.props.createXYSeries({name: "xxx", color: "red"});
  }
  // handleUpdateColorXY(val) {
  //   this.props.updateColorXY({name: "xxx", color: "red"});
  // }

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

    let enableButton = true;
    // let XYChartSeriesComponent = <h3>Blahhhhh</h3>;

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TitleEditComponent value={this.props.xyData.name} onChange={this.handleChartNameChange}/>
          </div>
        <div className="alert alert-danger">
          <strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.
        </div>
        <div style={{display: 'flex'}}>
          <div>
            <div style={style}>
              <FlatButton style={style}
                            type="submit"
                            label="Add Series"
                            disabled={!enableButton}
                            onClick={(e) => this.handleCreateXYSeries()} />
            </div>

            <div>
              <XYChartSeriesComponent
                xySeries={this.props.xyData.series}
                changeCellXY={this.handleChangeCell}
                createXYSeries={this.handleCreateXYSeries}
                deleteXYSeries={this.handleDeleteXYSeries}
                updateColorXY={this.handleUpdateColorXY}
              />
            </div>
          </div>
          <div>

            <div>
              <TitleComponent name={this.props.xyData.name}/>
            </div>

            <div>
              <XYChartComponent xySeries={this.props.xyData.series}/>
            </div>

          </div>



        </div>
        </MuiThemeProvider>
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
      dispatch(createChangeXYChartNameAction(val))
    },
    onLoadChart: () => {
      dispatch(createFetchXYDataAction());
    },
    deleteXYSeries: (value) => {
      dispatch(createDeleteXYSeriesAction(value))
    },
    updateColorXY: (colorValue, seriesName) => {
      dispatch(createUpdateColorXYAction(colorValue, seriesName))
    },



    createXYSeries: (series) => {
      dispatch(createCreateXYSeriesAction(series))
    },
    changeCellXY: (series, axis, row, value ) => {
      dispatch(createChangeCellXYAction({name:series.name, axis:series.axis, row: series.row, value: series.value}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XYChartContainer)

// export default XYChartPage;