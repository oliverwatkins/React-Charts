import React from "react";
import ReactDataGrid from "react-data-grid";

import Actions from "../../../../js/Actions";

export default class XYDataList extends React.Component {

  constructor(props) {
    super(props)

    this.rowGetter = this.rowGetter.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
  }

  createRows(props) {
    var rows = [];

    var lengthSeries = props.app.line.series[0].data.length;
    for (var index = 0; index < lengthSeries; index++) {

      let row = {}

      var noSeries = props.app.line.series.length

      for (var j = 0; j< noSeries; j++) {

        var val = props.app.line.series[j].data[index].y
        var nameS = props.app.line.series[j].name

        row[nameS] = val;
      }
      rows.push(row);
    }
    this._rows = rows;
  }

  createCols(props) {
    var cols = [];

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