import Immutable from 'immutable';

class XYChartEntity {

  static get path() {
    return ['app', 'xy'];
  }

  static getSeries(appState) {
    return appState.xy.series;
  }

  static deleteSeries(imState, action) {
    let list = imState.getIn([...this.path, 'series'])

    list = list.filter(function (elem) {
      return elem.get("name") !== action.seriesName
    })
    imState = imState.setIn([...this.path, 'series'], list)

    return imState;
  }

  static createSeries(imState, action) {
    let series = action.series;

    let list = imState.getIn([...this.path, 'series'])

    list = list.toJS();
    let firstSeries = list[0];

    let dataArr = [];
    firstSeries.data.forEach(function (data) {
      let n = data.name;
      dataArr.push({"x": n, "y": 0});
    });

    list.push(
      {
        name: series.name,
        color: series.color,
        data: dataArr
      },
    );

    var v = Immutable.fromJS(list)
    imState = imState.setIn([...this.path, 'series'], v)
    return imState;
  }

  static cellChanged(imState, action) {

    let row = action.value.fromRow;
    let seriesName = Object.keys(action.value.updated)[0];
    let cellValue = action.value.updated[seriesName];

    if (seriesName === "category") {
      imState = imState.setIn([...this.path, 'categories', row], cellValue)
    } else {

      var list = imState.getIn([...this.path, 'series']);

      var index = list.findIndex(function (item) {
        return item.get("name") === seriesName;
      })

      imState = imState.setIn([...this.path, 'series', index, 'data', row, 'y'], cellValue)
    }
    return imState;
  }

  static changeName(imState, newName) {
    imState = imState.setIn([...this.path, 'name'], newName)

    return imState;
  }
}

export default XYChartEntity;


