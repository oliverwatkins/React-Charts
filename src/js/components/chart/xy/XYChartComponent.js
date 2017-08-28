import React from "react";
import TitleComponent from '../TitleComponent'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

export default class XYChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
  }

  getChartData() {

  }

  createDataForChart() {

    var series = this.props.app.line.series;

    var lengthSeriesData = this.props.app.line.series[0].data.length;
    var newData = [];

    for (var i = 0; i < lengthSeriesData; i++) {

      var obj = {};

      obj["name"] = i;

      for (var j = 0; j < series.length; j++) {
        var s = series[j];

        let d = s.data[i].y;
        let n = s.name;

        obj[n] = d;
      }
      newData.push(obj)
    }
    // let data = newData;

    return newData;
  }

  render() {

    var series = this.props.app.line.series;
    var data = this.createDataForChart();

    return (

      <div>
        <TitleComponent name={this.props.app.line.name}/>

        <LineChart width={400} height={200} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />

          {series.map(function (series) {
            return (
              <Line type="monotone" dataKey={series.name} stroke="#82ca9d"/>
            )
          })}

        </LineChart>

      </div>
    );
  }
}

