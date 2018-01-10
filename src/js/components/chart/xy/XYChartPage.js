import React from "react";

import LineChartComponent from "./LineChartComponent";

import ActionsRedux from "../../../ActionsRedux";
import { connect } from 'react-redux'


import XYChartSeriesComponent from "./XYChartSeriesComponent"

class XYChartPage extends React.Component {

  handleChartNameChange(event) {
    ActionsRedux.changeLineChartName(event.currentTarget.value);
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    }

    return (
      <div>

        <h1>XY Chart</h1>

        <div className="alert alert-danger">
          <strong>ATTENTION!</strong> This chart is still a work in progress!!!!!.
        </div>


        <div style={{display: 'flex'}}>
          <div>
            <div style={style}>
              {/*<TitleEditComponent onChange={this.handleChartNameChange}/>*/}
              {/*<div>*/}
                {/*<LineChartForm {...this.state}/>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<LineSeriesList {...this.state}/>*/}
              {/*</div>*/}
            </div>
            <div>
              <XYChartSeriesComponent/>
            </div>

          </div>
          <div>
            <LineChartComponent/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    xyData: state.xy
  }
}
const mapDispatchToProps = dispatch => {
  return {
    XXchangeBarChartName: (val) => {
      dispatch(changeNamePie(val))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XYChartPage)

// export default XYChartPage;