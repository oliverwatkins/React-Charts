import React from "react";
import TitleComponent from '../../TitleComponent'
import {BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {barChartLogic} from "../barChartLogic";

import Loader from 'react-loader-advanced';
import PropTypes from 'prop-types';
// import { RingLoader } from 'react-spinners';

class BarChartPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    onLoadChart: PropTypes.func.isRequired,
    barData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFetching: PropTypes.bool.isRequired,
        categories: PropTypes.array.isRequired,
        series: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          data: PropTypes.arrayOf(PropTypes.shape({
              y: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            })
          ),
        }))
      }
    )
  };

  componentDidMount() {
    this.props.onLoadChart();
  }


  createDataForChart(barData) {

    let series = barChartLogic.getSeries(barData);
    let categories = barChartLogic.getCategories(barData);

    let newData = [];

    for (let i = 0; i < categories.length; i++) { //TODO refactor ES6 style
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

    let barData = this.props.barData;

    let series = barChartLogic.getSeries(barData);

    let data = this.createDataForChart(barData);

    let isFetching = barChartLogic.isFetching(barData);

    let style1 = {
      color:"white",
      fontSize: 40,
      display: "inline"
    }
    let style2 = {
      color:"white",
      fontSize: 40,
      display: "inline"
    }

    return (
      <Loader show={isFetching} message={
        <div style={{display: 'flex', position: 'center', justifyContent: 'center'}}>
          <div style={style1} color={'white'} loading="true"> disable spinner for now </div>
          {/*<RingLoader style={style1} color={'white'} loading={true}/>*/}
          <div style={style2}>..loading..</div>
        </div>
      }>

      <div>
        <TitleComponent name={barData.name}/>
        <BarChart width={600} height={500} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          {series.map(function (series, i) {
            return (
              <Bar type="monotone" key={i} dataKey={series.name} fill={series.color}/>
            )
          })}
        </BarChart>
      </div>
    </Loader>
    );
  }
}

export default BarChartPanel
