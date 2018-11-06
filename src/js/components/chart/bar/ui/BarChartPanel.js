import React from "react";
import TitleComponent from '../../TitleComponent'
import {BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {barChartLogic} from "../barChartLogic";

import Loader from 'react-loader-advanced';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

let createMaxMinArray = function (props) {
  let maxMinArray = {minY: undefined, maxY: undefined}

  //get overall max/min
  maxMinArray = props.barData.series.reduce((acc, object) => {

    //get max/min for a single series
    let maxMinSeries = object.data.reduce((acc2, obj2) => {
      acc2.minY = ( acc2.minY === undefined || obj2.y < acc2.minY ) ? obj2.y : acc2.minY
      acc2.maxY = ( acc2.maxY === undefined || obj2.y > acc2.maxY ) ? obj2.y : acc2.maxY
      return acc2;
    }, acc);
    return maxMinSeries;

  }, maxMinArray);

  return maxMinArray;
};

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

    //TODO refactor out of here
    //TODO refactor ES6 style
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
    let maxMinArray = createMaxMinArray(this.props);

    maxMinArray.maxY = parseInt(maxMinArray.maxY);
    maxMinArray.minY = parseInt(maxMinArray.minY);

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


    let loadingMessage = <div style={{display: 'flex', position: 'center', justifyContent: 'center'}}>
      <div style={style1} color={'white'} loading="true">  </div>
      <RingLoader style={style1} color={'white'} loading={true}/>
      <div style={style2}>loading..</div>
    </div>

    return (
      <Loader show={isFetching} message={loadingMessage}>
      <div className="chartpanel">
        <TitleComponent name={barData.name}/>
        <BarChart width={600} height={500} data={data} >

          <XAxis dataKey="name"/>
          <YAxis domain={[maxMinArray.minY, maxMinArray.maxY]}/>
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
