import React from "react";
import TitleComponent from '../TitleComponent'
import {BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import BarChartEntity from "../../../../js/entity/BarChartEntity";

import AppDispatcher from "../../../AppDispatcher"
import ActionTypes from "../../../ActionTypes"

export default class BarChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {spinner:true}
  }

  // componentDidMount: function () {
  //   new Profile({ id: this.props.id }).fetch({
  //     success: this.onSuccess,
  //     error: this.onError
  //   })
  // }

  componentDidMount() {
    AppDispatcher.dispatch({
      type: ActionTypes.FETCH_BAR_DATA,
    });
  }
  //
  //
  // shouldComponentUpdate() {
  //   // alert('here2')
  //   return true;
  // }
  //
  // componentDidUpdate() {
  //   // alert('here3')
  //   this.setState({spinner:false})
  // }


  shouldComponentUpdate() {
    // alert('here2')
    return true;
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

    let sp = <div></div>
    let isFetching = BarChartEntity.isFetching(this.props.app);

    if (isFetching) {
      sp = <h1>spinner</h1>
    }

    return (

      <div>
        <TitleComponent name={this.props.app.bar.name}/>
        {sp}
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

