import Immutable from 'immutable';


export const xyChartLogic = {

  path() {
    return ['app', 'xy'];
  },

  getSeries(appState) {
    return appState.xy.series;
  },

  deleteXYSeries(imState, action) {
    let list = imState.getIn([...this.path, 'series'])

    list = list.filter(function (elem) {
      return elem.get("name") !== action.name
    })
    imState = imState.setIn([...this.path, 'series'], list)

    return imState;
  },

  createXYSeries(imState, action) {


    let series = imState.getIn([...this.path, 'series'])
    series = Immutable.List(series);

    series = series.push(
      {
        name: action.name,
        color: action.color,
        data: [{"x":0,"y":0}]
      },
    );

    // var v = Immutable.fromJS(series)
    imState = imState.setIn([...this.path, 'series'], series)
    return imState;
  },

  changeCellXY(imState, action) {
    return imState;
  }


}


