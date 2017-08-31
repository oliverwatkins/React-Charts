import React from "react";

import XYChartComponent from "../components/chart/bar/BarChartComponent";

import XYChartForm from "../components/chart/bar/BarChartForm";
import XYDataList from "../components/chart/bar/BarChartDataTable";
import BarSeriesList from "../components/chart/bar/BarSeriesList";

import {Container} from 'flux/utils';

import AppStore from './../AppStore.js';

class LineChartPage extends React.Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  render() {
    return (

    <div>
      <h1>Line Chart</h1>
      <div className="col-md-5">
        <XYChartForm {...this.state}/>
      </div>

      <div className="col-md-5">
        <BarSeriesList {...this.state}/>
      </div>

      <div className="col-md-5">
        <XYDataList {...this.state}/>
      </div>
      <div className="col-md-5">
        <XYChartComponent {...this.state}/>
      </div>
    </div>
    );
  }
}


export default Container.create(LineChartPage); //flux thing