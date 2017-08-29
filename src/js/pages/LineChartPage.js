import React from "react";

import XYChartComponent from "../components/chart/bar/XYChartComponent";

import XYChartForm from "../components/chart/bar/XYChartForm";
import XYDataList from "../components/chart/bar/XYDataList";

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
        <XYDataList {...this.state}/>
      </div>
      <div className="col-md-5">
        <XYChartComponent {...this.state}/>
      </div>
    </div>



    );
  }

  // render() {
  //   return (
  //     <div>
  //       <h1>Pie Chart</h1>
  //       <div className="col-md-5">
  //         <PieChartForm {...this.state}/>
  //       </div>
  //       <div className="col-md-5">
  //         <PieChartSliceList {...this.state}/>
  //       </div>
  //       <div className="col-md-5">
  //         <SimplePieChart {...this.state}/>
  //       </div>
  //     </div>
  //   );
  // }
}


export default Container.create(LineChartPage); //flux thing