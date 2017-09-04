import React from "react";
import TitleComponent from '../TitleComponent'
import {BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import BarChartEntity from "../../../../js/entity/BarChartEntity";

export default class BarChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  createDataForChart() {

    let series = BarChartEntity.getSeries(this.props.app);
    let categories = BarChartEntity.getCategories(this.props.app);

    let newData = [];

    for (let i = 0; i < categories.length; i++) {

      let obj = {};

      obj["name"] = categories[i];

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
    let series = BarChartEntity.getSeries(this.props.app);
    let data = this.createDataForChart();

    return (

      <div>
        <TitleComponent name={this.props.app.bar.name}/>

        <BarChart width={600} height={500} data={data}
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

