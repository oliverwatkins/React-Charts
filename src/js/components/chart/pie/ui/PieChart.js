import React from "react";
import TitleComponent from '../../TitleComponent'
import {PieChart, Pie, Cell, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {pieChartLogic} from "../pieChartLogic";

import Loader from 'react-loader-advanced';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

class PieChartPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    onLoadChart: PropTypes.func.isRequired,
    pieData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired
        }))
      }
    )
  };

  componentDidMount() {
    this.props.onLoadChart();
  }

  createDataForChart(barData) {

    let series = pieChartLogic.getSlices(barData);

    // let categories = pieChartLogic.getCategories(barData);

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

    let pieData = this.props.pieData;

    let isFetching = this.props.isFetching;
    // let series = barChartLogic.getSeries(barData);
    // let data = this.createDataForChart(barData);
    // let isFetching = barChartLogic.isFetching(barData);

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


    let loadingMessage =
            <div style={{display: 'flex', position: 'center', justifyContent: 'center'}}>
              <div style={style1} color={'white'} loading="true">  </div>
                <RingLoader style={style1} color={'white'} loading={true}/>
              <div style={style2}> loading..</div>
            </div>

    const COLORS = pieData.data.map((entry, index) => entry.color)

    return (
      <Loader show={isFetching} message={loadingMessage}>

        <div>
          <TitleComponent name={pieData.name}/>
          <PieChart width={800} height={400}>
            <Pie data={pieData.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
              {
                pieData.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
            <Tooltip/>
          </PieChart>
        </div>
      </Loader>
    );
  }
}

export default PieChartPanel;
