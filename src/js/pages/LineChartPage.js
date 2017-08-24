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

export default LineChartPage;