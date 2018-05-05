// import React from "react";
// import {PieChart, Pie, Tooltip, Cell} from 'recharts'
//
// import TitleComponent from '../../TitleComponent'
//
// import PropTypes from 'prop-types';
//
// export default class PieChartComponent extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.getChartData = this.getChartData.bind(this);
//   }
//
//   static propTypes = {
//     data: PropTypes.arrayOf({
//       name: PropTypes.string.isRequired,
//       color: PropTypes.bool.isRequired,
//       data: PropTypes.array.isRequired
//     })
//   };
//
//   getChartData() {
//     // this.setState({
//     //   data01: SlicesStore.getChartData(),
//     // });
//   }
//
//   componentWillMount() {
//     // SlicesStore.on("change", this.getChartName);
//     // SlicesStore.on("change", this.getChartData);
//   }
//
//   componentWillUnmount() {
//     // SlicesStore.removeListener("change", this.getChartName);
//     // SlicesStore.removeListener("change", this.getChartData);
//   }
//
//   render() {
//     return (
//       <div></div>
//         )
//
//     let pieData = this.props.pieData;
//
//     const COLORS = pieData.data.map((entry, index) => entry.color)
//
//     return (
//       <div>
//         <TitleComponent name={pieData.name}/>
//         <PieChart width={800} height={400}>
//           <Pie data={pieData.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
//             {
//               pieData.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
//             }
//           </Pie>
//           <Tooltip/>
//         </PieChart>
//       </div>
//     );
//   }
// }