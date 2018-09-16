import React from "react";
import {ScatterChart, Scatter, LineChart, Bar, Line, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


export default class LineChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  createDataForChart() {

    let newData = [];
    return newData;
  }

  render() {
    const objects = []

    this.props.xySeries.map((object, i) => {
      objects.push({
        name: object.name,
        data: object.data,
        color: object.color,
        shape: object.shape,
      })
    })

    return (
      <div>
        <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid />
          <XAxis type="number" dataKey={'x'} />
          <YAxis type="number" dataKey={'y'} />
          <ZAxis range={[100]}/>
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          <Legend/>
          {objects.map((object, i) => <Scatter name={object.name} data={object.data} fill={object.color} line shape={object.shape} />)}
        </ScatterChart>
      </div>
    );
  }
}

