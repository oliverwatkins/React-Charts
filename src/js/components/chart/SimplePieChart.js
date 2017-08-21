import React from "react";
import {PieChart, Pie, Tooltip} from 'recharts'
import SlicesStore from "../../stores/SlicesStore";

export default class SimplePieChart extends React.Component {
  constructor(props) {
    super(props);

    console.info('this.props.pie.app.pie.name ' + props.app.pie.name)
    console.info('props ' + JSON.stringify(props))

    this.getChartName = this.getChartName.bind(this);
    this.getChartData = this.getChartData.bind(this);
  }

  getChartName() {
    this.setState({
      chartName: SlicesStore.getChartName(),
    });
  }

  getChartData() {
    this.setState({
      data01: SlicesStore.getChartData(),
    });
  }


  componentWillMount() {
    // SlicesStore.on("change", this.getChartName);
    // SlicesStore.on("change", this.getChartData);

  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getChartName);
    // SlicesStore.removeListener("change", this.getChartData);
  }

  render() {
    return (

      <div>


        <div id="canvasTitle">
          <h1 className="text-center">{this.props.app.pie.name}</h1>
        </div>

        <PieChart width={800} height={400}>
          <Pie data={this.props.app.pie.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
          <Tooltip/>
        </PieChart>
      </div>
    );
  }
}