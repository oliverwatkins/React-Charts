import React from "react";

import SimpleXYChart from "../components/chart/SimpleXYChart";

class LineChartPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Line Chart</h1>
        <SimpleXYChart/>
      </div>
    );
  }
}

export default LineChartPage;