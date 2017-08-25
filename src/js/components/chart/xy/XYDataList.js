import React from "react";
import ReactDataGrid from "react-data-grid";

export default class XYDataList extends React.Component {


  constructor(props) {
    super(props)
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];

    this.rowGetter = this.rowGetter.bind(this);
  }


  createRows() {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }

    this._rows = rows;
  }

  rowGetter(i) {
    return this._rows[i];
  }

  render() {
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];
    return (
      <div>
        <ReactDataGrid
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this._rows.length}
          minHeight={500} />

        TODO2

      </div>

    )
  }
}