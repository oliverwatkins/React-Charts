import React from "react";
import {ScatterChart, Scatter, LineChart, Bar, Line, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


let createMaxMinArray = function (props) {
  let mmArray = {minX: undefined, minY: undefined, maxX: undefined, maxY: undefined}

  //get overall max/min.
  mmArray = props.xySeries.reduce((acc, object) => {

    //get max/min for one series
    let minMaxArray = object.data.reduce((acc2, obj2) => {
      acc2.minX = ( acc2.minX === undefined || obj2.x < acc2.minX ) ? obj2.x : acc2.minX
      acc2.minY = ( acc2.minY === undefined || obj2.y < acc2.minY ) ? obj2.y : acc2.minY
      acc2.maxX = ( acc2.maxX === undefined || obj2.x > acc2.maxX ) ? obj2.x : acc2.maxX
      acc2.maxY = ( acc2.maxY === undefined || obj2.y > acc2.maxY ) ? obj2.y : acc2.maxY
      return acc2;
    }, acc);

    return minMaxArray;
  }, mmArray);

  mmArray.maxY = parseInt(mmArray.maxY);
  mmArray.maxX = parseInt(mmArray.maxX);
  mmArray.minY = parseInt(mmArray.minY);
  mmArray.minX = parseInt(mmArray.minX);
  return mmArray;
};
export default class XYChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const objects = []
    let maxMinArray = createMaxMinArray(this.props);




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
          <XAxis type="number" dataKey={'x'} domain={[maxMinArray.minX, maxMinArray.maxX]} />
          <YAxis type="number" dataKey={'y'} domain={[maxMinArray.minY, maxMinArray.maxY]} />
          <ZAxis range={[100]}/>
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          <Legend/>
          {objects.map((object, i) => <Scatter key={"scat_" + i} name={object.name} data={object.data} fill={object.color} line shape={object.shape} />)}
        </ScatterChart>
      </div>
    );
  }
}

