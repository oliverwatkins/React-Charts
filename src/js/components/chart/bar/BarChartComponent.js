import React from "react";
import TitleComponent from '../TitleComponent'
import {LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

export default class BarChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  createDataForChart() {

    let series = this.props.app.line.series;

    let lengthSeriesData = this.props.app.line.series[0].data.length;
    let newData = [];

    for (let i = 0; i < lengthSeriesData; i++) {

      let obj = {};

      obj["name"] = i;

      for (let j = 0; j < series.length; j++) {
        const s = series[j];

        let d = s.data[i].y;
        let n = s.name;

        obj[n] = d;
      }
      newData.push(obj)
    }
    return newData;
  }

  render() {

    var series = this.props.app.line.series;
    var data = this.createDataForChart();

    return (

      <div>
        <TitleComponent name={this.props.app.line.name}/>

        <BarChart width={400} height={200} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          {series.map(function (series) {
            return (
              <Bar type="monotone" dataKey={series.name} fill={series.color}/>
            )
          })}

        </BarChart>

      </div>
    );
  }
}

