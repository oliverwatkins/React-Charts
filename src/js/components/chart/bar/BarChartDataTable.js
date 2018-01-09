import React from "react";
import ReactDataGrid from "react-data-grid";
import PropTypes from 'prop-types';
import BarChartEntity from "./BarChartEntity";

class BarDataList extends React.Component {

  constructor(props) {
    super(props)

    this.rowGetter = this.rowGetter.bind(this);
  }

  createCols(barData) {

    let series = BarChartEntity.getSeries2(barData);

    let cols = [];

    cols.push({key: "category", name: "category", editable:true, formatter:ColumnFormatter});

    series.forEach(function (value) {
      cols.push({key: value.name, name: value.name, editable:true});
    });

    this._columns = cols;
  }

  createRows(barData) {
    let rows = [];

    let categories = BarChartEntity.getCategories2(barData);
    let series = BarChartEntity.getSeries2(barData);

    let categoryLength = categories.length; //props.app.bar.categories.length;

    for (let index = 0; index < categoryLength; index++) {

      let row = {}

      let noSeries = series.length;

      row["category"] = categories[index];

      for (let j = 0; j< noSeries; j++) {

        let val = series[j].data[index].y;
        let nameS = series[j].name;

        row[nameS] = val;
      }
      rows.push(row);
    }
    this._rows = rows;
  }

  rowGetter(i) {
    return this._rows[i];
  }

  render() {

    let barData = this.props.barData;

    this.createRows(barData);
    this.createCols(barData);

    let style = {"height":200};

    return (
      <div style={style}>
        <h3>Table Data : </h3>
        <ReactDataGrid

          style={style}
          enableCellSelect={true}
          onGridRowsUpdated={this.props.changeCell}
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this._rows.length}

          minHeight={150}
        />
      </div>
    )
  }
}

class ColumnFormatter extends React.Component {

  // propTypes: {
  //   value: "" //PropTypes.number.isRequired
  // }

  render() {
    return (
      <div >
        <b>{this.props.value}</b>
      </div>);
  }
};

ColumnFormatter.propTypes = PropTypes.number.isRequired

export default BarDataList;

