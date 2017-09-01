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

        TODO
      </div>
    );
  }
}

export default Container.create(LineChartPage);