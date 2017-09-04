import React from "react";
import ReactDataGrid from "react-data-grid";
const { Row } = ReactDataGrid;


import Actions from "../../../../js/Actions";

export default class LineDataList extends React.Component {

  constructor(props) {
    super(props)

    this.rowGetter = this.rowGetter.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
  }

  createRows(props) {
    let rows = [];

    let categoryLength = props.app.line.categories.length;

    for (let index = 0; index < categoryLength; index++) {

      let row = {}

      let noSeries = props.app.line.series.length;

      row["category"] = props.app.line.categories[index];

      for (let j = 0; j< noSeries; j++) {

        let val = props.app.line.series[j].data[index].y;
        let nameS = props.app.line.series[j].name;

        row[nameS] = val;
      }
      rows.push(row);
    }
    this._rows = rows;
  }

  createCols(props) {
    var cols = [];

    // formatter: PercentCompleteFormatter

    cols.push({key: "category", name: "category", editable:true, formatter:ColumnFormatter});

    props.app.line.series.forEach(function (value) {
      cols.push({key: value.name, name: value.name, editable:true});
    });

    this._columns = cols;
  }

  rowGetter(i) {
    return this._rows[i];
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

    return (<div>TODO</div>)


    this.createRows(this.props);
    this.createCols(this.props);
    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          onGridRowsUpdated={this.handleGridRowsUpdated}
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this._rows.length}
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