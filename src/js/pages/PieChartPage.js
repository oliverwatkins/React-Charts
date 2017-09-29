import React from "react";

import {Component} from 'react';
import {Container} from 'flux/utils';
import AppStore from './../AppStore.js';



import SimplePieChart from "../components/chart/pie/PieChartComponent";
import PieChartForm from "../components/chart/pie/PieChartForm";
import PieChartSliceList from "../components/chart/pie/PieChartSliceList";


class PieChartPage extends Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  handleChartNameChange(event) {
    var changeName = function(newName) {
      dispatcher.dispatch({
        type: "CHANGE_NAME",
        newName,
      });
    }

    console.info('changing text to ' + event.currentTarget.value)
    changeName(event.currentTarget.value);
  }

  render() {
    return (
      <div>
        <h1>Pie Chart</h1>

        <div className="alert alert-danger">
          <strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.
        </div>

        {/*<div className="col-md-5">This chart is still a work in progress!!!!! </div>*/}
        <div className="col-md-5">
          <PieChartForm {...this.state}/>
        </div>
        <div className="col-md-5">
          <PieChartSliceList {...this.state}/>
        </div>
        <div className="col-md-5">
          <SimplePieChart {...this.state}/>
        </div>
      </div>
    );
  }
}

export default Container.create(PieChartPage);