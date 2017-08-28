import React from "react";
import {PieChart, Pie, Tooltip, Cell} from 'recharts'

import TitleComponent from '../TitleComponent'

export default class PieChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
  }

  getChartData() {
    // this.setState({
    //   data01: SlicesStore.getChartData(),
    // });
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
    const COLORS = this.props.app.pie.data.map((entry, index) => entry.color)
    return (
      <div>

        <TitleComponent name={this.props.app.pie.name}/>
        <PieChart width={800} height={400}>
          <Pie data={this.props.app.pie.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
            {
              this.props.app.pie.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
          <Tooltip/>
        </PieChart>
      </div>
    );
  }
}