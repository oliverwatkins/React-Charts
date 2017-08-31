import Immutable from 'immutable';

class BarChartEntity {

  static get path() {
    return ['app', 'line'];
  }

  static getSeries(appState) {
    return appState.line.series;
  }
  static getCategories(appState) {
    return appState.line.categories;
  }

  static createSeries(imState, action) {
    let series = action.series;

    let myList = imState.getIn([...this.path, 'series'])

    myList = myList.toJS();
    let firstSeries = myList[0];

    let dataArr = [];
    firstSeries.data.forEach(function (data) {
      let n = data.name;
      dataArr.push({"x":n, "y":0 });
    });

    myList.push(
      {
        name: series.name,
        color: series.color,
        data: dataArr
      },
    );

    var v = Immutable.fromJS(myList)
    imState = imState.setIn([...this.path, 'series'], v)
    return imState;
  }


  /**
   *
   * @param imState
   * @param action
   * @returns {*}
   */
  static cellChanged(imState, action) {


    /**
     * action.value :
     * fromRow : 3,
     * toRow : 3,
     * updated: {seriesName: '99}
     */

    let row = action.value.fromRow;
    let seriesName = Object.keys(action.value.updated)[0];
    let cellValue = action.value.updated[seriesName]

    if (seriesName === "category") {
      imState = imState.setIn([...this.path, 'categories', row], cellValue)
    }else {

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

export default BarChartEntity;


