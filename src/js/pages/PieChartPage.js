import React from "react";

import {Component} from 'react';
import {Container} from 'flux/utils';
import AppStore from './../AppStore.js';


import SimplePieChart from "../components/chart/SimplePieChart";
import PieChartForm from "../components/chart/PieChartForm";
import PieChartSliceList from "../components/chart/PieChartSliceList";


class PieChartPage extends Component {


  // constructor(props) {
  //
  // }

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
    changeName(event.currentTarget.value);
  }

  render() {
    // console.info('state is : ' + this.state)
    return (
      <div>
        <h1>Pie Chart</h1>
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