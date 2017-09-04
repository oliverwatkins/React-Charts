import React from "react";

import LineChartComponent from "../components/chart/line/LineChartComponent";
import LineSeriesList from "../components/chart/line/LineSeriesList";
import LineChartForm from "../components/chart/line/LineChartForm";
import LineChartDataTable from "../components/chart/line/LineChartDataTable";

import {Container} from 'flux/utils';

import AppStore from './../AppStore.js';
import Actions from './../Actions.js';

import TitleEditComponent from "../components/chart/TitleEditComponent";

class LineChartPage extends React.Component {


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
                <LineChartForm {...this.state}/>
              </div>
              <div>
                <LineSeriesList {...this.state}/>
              </div>
            </div>
          </div>
          <div>
            <LineChartComponent {...this.state}/>
          </div>
        </div>
        <div style={{width: 700}}>
          <LineChartDataTable {...this.state}/>
        </div>
      </div>
    );
  }
}

export default Container.create(LineChartPage);