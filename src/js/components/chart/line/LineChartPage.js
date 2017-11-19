import React from "react";

import LineChartComponent from "./LineChartComponent";
import LineSeriesList from "./LineSeriesList";
import LineChartForm from "./LineChartForm";
import LineChartDataTable from "./LineChartDataTable";

import TitleEditComponent from "../TitleEditComponent";

import ActionsRedux from "../../../ActionsRedux";

class LineChartPage extends React.Component {

  handleChartNameChange(event) {
    ActionsRedux.changeLineChartName(event.currentTarget.value);
  }

  // static getStores() {
  //   return [AppStore];
  // }
  //
  // static calculateState(prevState) {
  //   return AppStore.getState();
  // }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    }

    return (
      <div>

        <h1>XY Chart</h1>

        <div className="alert alert-danger">
          <strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.
        </div>


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

export default LineChartPage;