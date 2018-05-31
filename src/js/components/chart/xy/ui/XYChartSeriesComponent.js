import React from "react";


import XYChartForm from "./LineChartForm";


import './List.less';

/**
 * Manages creating deleting series for chart
 */


export default class XYChartSeriesComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    let style = {
      "padding": "3px",
      "margin": "3px",
      "border": "5px solid blue"
    }
    return (

      <div className="listStyle" style={style}>
        <XYChartForm/>
        {/*<XYSeriesComponent/>*/}
      </div>
    );
  }
}
