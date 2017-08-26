import React from "react";

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

export default class XYChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
  }

  getChartData() {
    // this.setState({
    //     this.data = [
    //       {name: 'Page AXX', uv: 4000, pv: 2400, amt: 2400},
    //       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    //       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    //       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    //       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    //       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    //       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    //     ];
    // });
  }

  // constructor() {
  //   super();
  //   this.data = [
  //     {name: 'Page AXX', uv: 4000, pv: 2400, amt: 2400},
  //     {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  //     {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  //     {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  //     {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  //     {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  //     {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  //   ];
  // }

//   const COLORS = this.props.app.pie.data.map((entry, index) => entry.color)
//   return (
// <div>
// <div id="canvasTitle">
// <h1 className="text-center">{this.props.app.pie.name}</h1>
// </div>
// <PieChart width={800} height={400}>
// <Pie data={this.props.app.pie.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
// {
//   this.props.app.pie.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
// }
// </Pie>
// <Tooltip/>
// </PieChart>
// </div>

  // name: "Some line graph (fixed X)",
  //
  // series: [
  //
  //   {
  //     name : "Series1x",
  //     data : [
  //       {y: 17},
  //       {y: 43},
  //       {y: 73},
  //       {y: 23}
  //   },
  //   {
  //     name : "Series2x",
  //     data : [
  //       {y: 17},
  //       {y: 43},
  //       {y: 73},
  //       {y: 23}
  //   },
  //
  // ]


  render() {

    var series = this.props.app.line.series;

    var lengthSeriesData = this.props.app.line.series[0].data.length;
    var newData = [];

    for (var i = 0; i < lengthSeriesData; i++) {

      var obj = {};

      obj["name"] = i;

      for (var j = 0; j < series.length; j++) {
        var s = series[j];

        let d = s.data[i].y;
        let n = s.name

        obj[n] = d;
      }
      newData.push(obj)
    }

    var data = [
      {name: '1', Series1x: 17, Series2x: 17},
      {name: '2', Series1x: 43, Series2x: 43},
      {name: '3', Series1x: 73, Series2x: 9800},
      {name: '4', Series1x: 23, Series2x: 3908},
      {name: '5', Series1x: 1890, Series2x: 4800},
      {name: '6', Series1x: 2390, Series2x: 3800},
      {name: '7', Series1x: 3490, Series2x: 4300},
    ];


    data = newData;

    console.info('asdf')
    return (

      <LineChart width={600} height={300} data={data}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="Series1x" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="Series2x" stroke="#82ca9d"/>
      </LineChart>
    );
  }
}

