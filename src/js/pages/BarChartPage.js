import React from "react";

import BarChartComponent from "../components/chart/bar/BarChartComponent";
import BarSeriesList from "../components/chart/bar/BarSeriesList";
import BarChartForm from "../components/chart/bar/BarChartForm";
import BarChartDataTable from "../components/chart/bar/BarChartDataTable";
import CategoryForm from "../components/chart/bar/CategoryForm";

import CategoryDataList from "../components/chart/bar/CategoryDataList";

import {Container} from 'flux/utils';

import AppStore from './../AppStore.js';
import Actions from './../Actions.js';

import TitleEditComponent from "../components/chart/TitleEditComponent";

class BarChartPage extends React.Component {


  handleChartNameChange(event) {
    Actions.changeLineChartName(event.currentTarget.value);
  }

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  render() {

    let style = {
      borderColor: "#ed4226",
      borderStyle: "solid",
      borderWidth: "1px"
    }

    return (

      <div>
        <h1>Bar Chart</h1>

        <TitleEditComponent onChange={this.handleChartNameChange}/>

        <div style={style}>
          <div className="col-md-5">
            <BarChartForm {...this.state}/>
          </div>

          <div className="col-md-5">
            <BarSeriesList {...this.state}/>
          </div>
        </div>

        <div style={style}>
          <div className="col-md-5">
            <CategoryForm {...this.state}/>
          </div>

          <div className="col-md-5">
            <CategoryDataList {...this.state}/>
          </div>
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