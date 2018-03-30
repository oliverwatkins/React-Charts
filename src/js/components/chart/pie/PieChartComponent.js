import React from "react";
import {PieChart, Pie, Tooltip, Cell} from 'recharts'

import TitleComponent from '../TitleComponent'

import PropTypes from 'prop-types';


import { connect } from 'react-redux'

// import {changeNamePie} from '../../../ActionsRedux'

export default class PieChartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
  }


  static propTypes = {
    pieData: PropTypes.number,
    asdf: PropTypes.element.isRequired
  }

  getChartData() {
    // this.setState({
    //   data01: SlicesStore.getChartData(),
    // });
  }


  componentWillMount() {
    // SlicesStore.on("change", this.getChartName);
    // SlicesStore.on("change", this.getChartData);
  }

  componentWillUnmount() {
    // SlicesStore.removeListener("change", this.getChartName);
    // SlicesStore.removeListener("change", this.getChartData);
  }





  render() {
    return (
      <div></div>
        )

    let pieData = this.props.pieData;

    const COLORS = pieData.data.map((entry, index) => entry.color)

    // const COLORS = this.props.app.pie.data.map((entry, index) => entry.color)
    return (
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
    );
  }
}


PieChartComponent.defaultProps = {
  asdf:PropTypes.element.isRequired
}

// /**
//  * TODO remove redux from here
//  * @param state
//  * @returns {{pieData: (initialState.app.pie|{name, data})}}
//  */
//
// const mapStateToProps = state => {
//   return {
//     pieData: state.app.pie
//   }
// }
// const mapDispatchToProps = state => {
//   return {}
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PieChartComponent)