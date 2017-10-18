import React from "react";
import ReactDataGrid from "react-data-grid";
const { Row } = ReactDataGrid;


import Actions from "../../../../js/ActionsRedux";


import XYChartEntity from "../../../entity/XYChartEntity";


export default class LineChartDataTable extends React.Component {

  constructor(props) {
    super(props)

    this.rowGetter = this.rowGetter.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
  }

  createCols(props) {

    let series = XYChartEntity.getSeries(props.app);

    var cols = [];

    // formatter: PercentCompleteFormatter

    cols.push({key: "category", name: "category", editable:true, formatter:ColumnFormatter});

    series.forEach(function (value) {
      cols.push({key: value.name, name: value.name, editable:true});
    });

    this._columns = cols;
  }

  // createRows(props) {
  //   let rows = [];
  //
  //   // let categories = XYChartEntity.getCategories(props.app);
  //   let series = XYChartEntity.getSeries(props.app);
  //
  //   // let categoryLength = categories.length; //props.app.bar.categories.length;
  //
  //   for (let index = 0; index < categoryLength; index++) {
  //
  //     let row = {}
  //
  //     let noSeries = series.length;
  //
  //     row["category"] = props.app.bar.categories[index];
  //
  //     for (let j = 0; j< noSeries; j++) {
  //
  //       let val = series[j].data[index].y;
  //       let nameS = series[j].name;
  //
  //       row[nameS] = val;
  //     }
  //     rows.push(row);
  //   }
  //   this._rows = rows;
  // }



  rowGetter(i) {
    return 1; //this._rows[i];
  }

  /**
   * @param fromRow 0
   * @param toRow 0
   * @param updated (Series3x:3)
   */
  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    Actions.changeCell({ fromRow, toRow, updated })
  }

  render() {
    // this.createRows(this.props);
    this.createCols(this.props);
    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          onGridRowsUpdated={this.handleGridRowsUpdated}
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={12}
          minHeight={200}/>
      </div>
    )
  }
}


const ColumnFormatter = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div >
        <b>{this.props.value}</b>
      </div>);
  }
});