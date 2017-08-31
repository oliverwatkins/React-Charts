import React from "react";

import BarChartComponent from "../components/chart/bar/BarChartComponent";
import BarSeriesList from "../components/chart/bar/BarSeriesList";
import BarChartForm from "../components/chart/bar/BarChartForm";
import BarChartDataTable from "../components/chart/bar/BarChartDataTable";
import CategoryForm from "../components/chart/bar/CategoryForm";

import CategoryDataList from "../components/chart/bar/CategoryDataList";

import {Container} from 'flux/utils';

import AppStore from './../AppStore.js';

class BarChartPage extends React.Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  render() {
    return (

    <div>
      <h1>Bar Chart</h1>

      <div className="col-md-5">
        <BarChartForm {...this.state}/>
      </div>

      <div className="col-md-5">
        <BarSeriesList {...this.state}/>
      </div>



      <div className="col-md-5">
        <CategoryForm {...this.state}/>
      </div>

      <div className="col-md-5">
        <CategoryDataList {...this.state}/>
      </div>


      <div className="col-md-5">
        <BarChartDataTable {...this.state}/>
      </div>

      <div className="col-md-5">
        <BarChartComponent {...this.state}/>
      </div>
    </div>
    );
  }
}


export default Container.create(BarChartPage); //flux thing