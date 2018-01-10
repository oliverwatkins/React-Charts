import React from "react";
import {ScatterChart, Scatter, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


export default class LineChartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  createDataForChart() {
    // let series = XYChartEntity.getSeries(this.props.app);

    // let series = BarChartEntity.getSeries(this.props.app);

    let newData = [];

    // for (let i = 0; i < categories.length; i++) {
    //
    //   let obj = {};
    //
    //   obj["name"] = categories[i];
    //
    //   for (let j = 0; j < series.length; j++) {
    //     const s = series[j];
    //
    //     let d = s.data[i].y;
    //     let n = s.name;
    //
    //     obj[n] = d;
    //   }
    //   newData.push(obj)
    // }
    return newData;
  }



  render() {

  // const data = [{x: 1, y: 200, z: 200}, {x: 120, y: 100, z: 260},
  //   {x: 17, y: 3, z: 400}, {x: 140, y: 25, z: 280},
  //   {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]

    const data = [{x: 1, y: 1}, {x: 5, y: 7}, {x: 10, y: 18}]

    // let series = XYChartEntity.getSeries(this.props.app);

    // let series = this.props.app.xy.series;
    // let data = this.createDataForChart();

    return (
      <div>
        {/*<TitleComponent name={this.props.app.xy.name}/>*/}
        <LineChart width={600} height={300} data={data}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey={"x"} interval={5} type="number" ticks={[10, 12, 14, 16, 18]}/>
          <YAxis dataKey={"y"} interval={5} type="number" ticks={[10, 12, 14, 16, 18]}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="x" stroke="#8884d8" />
          <Line type="monotone" dataKey="y" stroke="#2284d8" />
        </LineChart>

        {/*ticks={[100, 120, 140, 160, 180]}*/}


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

