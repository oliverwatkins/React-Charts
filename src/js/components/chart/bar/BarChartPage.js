import React from "react";

import BarChartComponent from "./BarChartComponent";
import BarSeriesList from "./BarSeriesList";
import BarChartForm from "./BarChartForm";
import BarChartDataTable from "./BarChartDataTable";
import CategoryForm from "./CategoryForm";

import CategoryDataList from "./CategoryDataList";

import { connect } from 'react-redux'
import {changeLineChartName} from './duck.js';



import TitleEditComponent from "../TitleEditComponent";

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
    // barData: state.app.bar
    barData: state.bar
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
