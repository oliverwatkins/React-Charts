import React from "react";
import ReactDataGrid from "react-data-grid";

export default class XYDataList extends React.Component {


  constructor(props) {
    super(props)

    var rows = [];
    var cols = [];

    props.app.line.series.forEach(function (value) {
      cols.push({key: value.name, name: value.name});
    });

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

    this._columns = cols;

    this.rowGetter = this.rowGetter.bind(this);
  }

  rowGetter(i) {
    return this._rows[i];
  }

  render() {
    return (
      <div>
        <ReactDataGrid
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this._rows.length}
          minHeight={500}/>

        TODO2
      </div>
    )
  }
}