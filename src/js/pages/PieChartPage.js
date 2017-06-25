import React from "react";

import {Component} from 'react';
import {Container} from 'flux/utils';
import AppStore from './../AppStore.js';


import SimplePieChart from "../components/chart/SimplePieChart";
import PieChartForm from "../components/chart/PieChartForm";
import PieChartSliceList from "../components/chart/PieChartSliceList";


class PieChartPage extends Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  render() {
    return (
      <div>
        <h1>Pie Chart</h1>
        <div className="col-md-5">
          <PieChartForm/>
        </div>
        <div className="col-md-5">
          <PieChartSliceList/>
        </div>
        <div className="col-md-5">
          <SimplePieChart {...this.state}/>
        </div>
      </div>
    );
  }
}

export default Container.create(PieChartPage);