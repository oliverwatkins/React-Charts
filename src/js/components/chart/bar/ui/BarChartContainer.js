import React from "react";

import BarChartComponent from "./BarChart";
import BarSeriesList from "./BarSeriesList";
import BarChartForm from "./BarChartForm";
import BarChartDataTable from "./BarChartDataTable";
import CategoryForm from "./CategoryForm";

import {makeCategoriesSelector} from "../selectors"
import {makeBarDataSelector} from "../selectors"

import CategoryDataList from "./CategoryDataList";


// import './BarSeriesList.less';
import './../../../../global.less';



import {connect} from 'react-redux'
import {createCategory, changeLineChartName, fetchBarData, deleteSeries,
  updateColorBar, createSeries, deleteCategory, changeCell
} from '../duck';

import TitleEditComponent from "../../TitleEditComponent";


/**
 * Redux container
 *
 */

class BarChartContainer extends React.Component {

  constructor(props) {
    super(props)

    this.handleChartNameChange = this.handleChartNameChange.bind(this);
    this.handleDeleteSeries = this.handleDeleteSeries.bind(this);
    this.handleUpdateColorBar = this.handleUpdateColorBar.bind(this);
    this.handleCreateSeries = this.handleCreateSeries.bind(this);
    this.handleCreateCategory = this.handleCreateCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.handleChangeCell = this.handleChangeCell.bind(this);
    this.onLoadChart = this.onLoadChart.bind(this);
  }



  handleChartNameChange(val, event) {
    this.props.changeLineChartName(val);
  }

  handleDeleteSeries(val, event) {
    this.props.deleteSeries(val);
  }

  handleUpdateColorBar(val, name) {
    this.props.updateColorBar(val, name);
  }

  handleCreateSeries(val) {
    this.props.createSeries(val);
  }

  handleCreateCategory(val) {
    this.props.createCategory(val);
  }

  handleChangeCell(val) {
    this.props.changeCell(val);
  }

  handleDeleteCategory(val) {
    this.props.deleteCategory(val);
  }

  onLoadChart(val, event) {
    this.props.onLoadChart(val);
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    };

    return (
      <div className="chartPage" style={style}>
        <div style={{display: 'flex'}}>
          <div>
            <div >
              <TitleEditComponent onChange={this.handleChartNameChange}/>
              <div>
                <BarChartForm createSeries={this.handleCreateSeries}/>
              </div>
              <div>
                <BarSeriesList barData={this.props.barData}
                               deleteSeries={this.handleDeleteSeries}
                               colorSelected={this.handleUpdateColorBar}
                />
              </div>
            </div>
            <div style={style}>
              <div>
                <CategoryForm createCategory={this.handleCreateCategory}/>
              </div>
              <div>
                <CategoryDataList categories={this.props.categories} deleteCategory={this.handleDeleteCategory}/>
              </div>
            </div>
          </div>
          <div>
            <div style={{width: 700, height: 200}}>
              <BarChartDataTable barData={this.props.barData} changeCell={this.handleChangeCell} />
            </div>
            <div>
              <BarChartComponent barData={this.props.barData} onLoadChart={this.onLoadChart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const getCategories = makeCategoriesSelector(state)
  const getBarData = makeBarDataSelector(state)
  return {
    barData: getBarData,
    categories: getCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLineChartName: (val) => {
      dispatch(changeLineChartName(val))
    },
    onLoadChart: () => {
      dispatch(fetchBarData());
    },
    deleteSeries: (value) => {
      dispatch(deleteSeries(value))
    },
    updateColorBar: (colorValue, seriesName) => {
      dispatch(updateColorBar(colorValue, seriesName))
    },
    createSeries: (series) => {
      dispatch(createSeries(series))
    },
    createCategory: (cat) => {
      dispatch(createCategory(cat))
    },
    deleteCategory: (cat) => {
      dispatch(deleteCategory(cat))
    },
    changeCell: (fromRow, toRow, updated ) => {
      dispatch(changeCell(fromRow, toRow, updated ))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarChartContainer)
