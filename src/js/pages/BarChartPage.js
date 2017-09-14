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


  handleChartNameChange(val, event) {
    // Actions.changeLineChartName(event.currentTarget.value);
    Actions.changeLineChartName(val);
  }

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    }

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
                <BarSeriesList {...this.state}/>
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
            <BarChartComponent {...this.state}/>
          </div>
          </div>
        </div>

      </div>
    );
  }
}


export default Container.create(BarChartPage); //flux thing