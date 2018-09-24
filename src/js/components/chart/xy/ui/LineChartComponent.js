import React from "react";
import {ScatterChart, Scatter, LineChart, Bar, Line, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


export default class LineChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  // createDataForChart() {
  //
  //   let newData = [];
  //   return newData;
  // }

  render() {
    const objects = []


    let mmArray = {minX:undefined, minY:undefined, maxX:undefined, maxY:undefined}

    mmArray = this.props.xySeries.reduce((acc, object) => {
      let minMaxArray = object.data.reduce((acc2, obj2) => {
        acc2.minX = ( acc2.minX === undefined || obj2.x < acc2.minX ) ? obj2.x : acc2.minX
        acc2.minY = ( acc2.minY === undefined || obj2.y < acc2.minY ) ? obj2.y : acc2.minY
        acc2.maxX = ( acc2.maxX === undefined || obj2.x > acc2.maxX ) ? obj2.x : acc2.maxX
        acc2.maxY = ( acc2.maxY === undefined || obj2.y > acc2.maxY ) ? obj2.y : acc2.maxY
        return acc2;
      }, acc);
      return minMaxArray;
    }, mmArray);

    // alert("maxY " + mmArray.maxY)

    mmArray.maxY = parseInt(mmArray.maxY);
    mmArray.maxX = parseInt(mmArray.maxX);
    mmArray.minY = parseInt(mmArray.minY);
    mmArray.minX = parseInt(mmArray.minX);

    this.props.xySeries.map((object, i) => {
      objects.push({
        name: object.name,
        data: object.data,
        color: object.color,
        shape: object.shape,
      })
    })

    // let newData = [];
    //
    // newData = object.data;


    return (
      <div>
        <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid />
          <XAxis type="number" dataKey={'x'}
                 domain={[mmArray.minX, mmArray.maxX]}
          />
          <YAxis type="number" dataKey={'y'}
                 domain={[mmArray.minY, mmArray.maxY]}
          />


          <ZAxis range={[100]}/>
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          <Legend/>
          {objects.map((object, i) => <Scatter name={object.name} data={object.data} fill={object.color} line shape={object.shape} />)}
        </ScatterChart>
      </div>
    );
  }
}

