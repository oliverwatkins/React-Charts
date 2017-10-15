import React from "react";

import BarChartComponent from "../components/chart/bar/BarChartComponent";
import BarSeriesList from "../components/chart/bar/BarSeriesList";
import BarChartForm from "../components/chart/bar/BarChartForm";
import BarChartDataTable from "../components/chart/bar/BarChartDataTable";
import CategoryForm from "../components/chart/bar/CategoryForm";

import CategoryDataList from "../components/chart/bar/CategoryDataList";

import { connect } from 'react-redux'
import {changeLineChartName} from './../ActionsRedux.js';



import TitleEditComponent from "../components/chart/TitleEditComponent";

class BarChartPage extends React.Component {

  constructor(props) {
    super(props)

    this.handleChartNameChange = this.handleChartNameChange.bind(this);
  }
  handleChartNameChange(val, event) {
    this.props.changeLineChartName(val);
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    }

    return (
      <div>
        <div style={{display: 'flex'}}>
          <div>
            <div style={style}>
              <TitleEditComponent onChange={this.handleChartNameChange}/>
              <div>
                <BarChartForm {...this.state}/>
              </div>
              <div>
                <BarSeriesList {...this.state}/>
              </div>
            </div>
            <div style={style}>
              <div>
                <CategoryForm {...this.state}/>
              </div>
              <div>
                <CategoryDataList {...this.state}/>
              </div>
            </div>
          </div>
          <div>
          <div style={{width: 700, height: 200}}>
            <BarChartDataTable {...this.state}/>
          </div>
          <div>
            <BarChartComponent {...this.state}/>
          </div>
          </div>
        </div>

      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    barData: state.app.bar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLineChartName: (val) => {
      dispatch(changeLineChartName(val))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChartPage)
