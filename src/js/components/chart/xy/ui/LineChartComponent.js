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

  // createScatters() {
  //
  //   return{
  //   <div>
  //     <Scatter name='A school' data={data01} fill='#8884d8' line shape="cross"/>
  //     <Scatter name='B school' data={data02} fill='#82ca9d' line shape="diamond"/>
  //     <Scatter name='asdfasfd' data={data03} fill='#434343' line shape="square"/>
  //   </div>
  //   }
  //
  // }


  render() {


    // xySeries={this.props.xySeries}
    // debugger;
    //
    // console.info("" + this.props.xySeries)


    // {"xySeries":[{"name":"Series1","color":"red","data":[{"x":2,"y":3},{"x":4,"y":6},{"x":7,"y":8},{"x":9,"y":23}]},{"name":"Series2","color":"blue","data":[{"x":3,"y":5},{"x":5,"y":11},{"x":6,"y":12},{"x":12,"y":25}]}]}"

    //array :
    this.props.xySeries;


  // const data = [{x: 1, y: 200, z: 200}, {x: 120, y: 100, z: 260},
  //   {x: 17, y: 3, z: 400}, {x: 140, y: 25, z: 280},
  //   {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]

    // const data = this.props.xySeries[0].data;

    // const data = [{x: 1, x2:3, y: 1}, {x: 5, x2:3, y: 17}, {x: 10, x2:3, y: 18}]


    // const data01 = [{x: 10, y: 30}, {x: 30, y: 200}, {x: 45, y: 100}, {x: 50, y: 400}, {x: 70, y: 150}, {x: 100, y: 250}];
    // const data02 = [{x: 30, y: 20}, {x: 50, y: 180}, {x: 75, y: 240}, {x: 100, y: 100}, {x: 120, y: 190}];

    // const data03 = [{x: 65, y: 50}];

    const objects = [
      {
        name:"asdfasfd",
        data: [{x: 10, y: 30}, {x: 30, y: 200}, {x: 45, y: 100}, {x: 50, y: 400}, {x: 70, y: 150}, {x: 100, y: 250}],
        color: "#111111",
        shape: "square"
      },
      {
        name:"asdfasfd",
        data: [{x: 30, y: 20}, {x: 50, y: 180}, {x: 75, y: 240}, {x: 100, y: 100}, {x: 120, y: 190}],
        color: "#757575",
        shape: "diamond"
      },
      {
        name:"asdfasfd",
        data: [{x: 65, y: 50}],
        color: "#512121",
        shape: "circle"
      }

    ]


    objects.push({
      name: this.props.xySeries[0].name,
      data: this.props.xySeries[0].data,
      color: this.props.xySeries[0].color,
      shape: this.props.xySeries[0].shape,

    })






    // let series = XYChartEntity.getSeries(this.props.app);

    // let series = this.props.app.xy.series;
    // let data = this.createDataForChart();

    // let myScatters = this.createScatters();

    return (
      <div>
        <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid />
          <XAxis type="number" dataKey={'x'} />
          <YAxis type="number" dataKey={'y'} />
          <ZAxis range={[100]}/>
          <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          <Legend/>
          {/*<Scatter name='A school' data={data01} fill='#8884d8' line shape="cross"/>*/}
          {/*<Scatter name='B school' data={data02} fill='#82ca9d' line shape="diamond"/>*/}
          {/*<Scatter name='asdfasfd' data={data03} fill='#434343' line shape="square"/>*/}

          {objects.map((object, i) => <Scatter name={object.name} data={object.data} fill={object.color} line shape={object.shape} />)}

        </ScatterChart>


        {/*<LineChart width={500} height={300} data={data}>*/}
          {/*<XAxis dataKey="name"/>*/}
          {/*<YAxis/>*/}
          {/*<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>*/}
          {/*<Line type="monotone" dataKey="uv" stroke="#8884d8" />*/}
        {/*</LineChart>*/}



        {/*<LineChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>*/}
          {/*<XAxis dataKey={'x'} name='stature' unit='cm'/>*/}
          {/*<YAxis dataKey={'y'} name='weight' unit='kg'/>*/}
          {/*<Scatter name='A school' data={data} fill='#8884d8'/>*/}
          {/*<CartesianGrid />*/}
          {/*<Tooltip cursor={{strokeDasharray: '3 3'}}/>*/}
        {/*</LineChart>*/}

      </div>
    );
  }
}

