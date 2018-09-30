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

    let seriesList = imState.getIn([...this.path, 'series'])

    console.info("action " + action.name)

    var idxSeriesItem = seriesList.findIndex((elem) => {
      return elem.get("name") === action.seriesName
    })

    let singlelistItem = seriesList.filter((elem, i) => {
      return elem.get("name") === action.seriesName
    })

    singlelistItem = singlelistItem.get(0);

    let l = singlelistItem.toJS();
    console.log(l);
    singlelistItem = singlelistItem.updateIn(['data'], function(list){
      var idx = list.findIndex(function(item, i){ //index?
        if(i == action.row)
          return true;
      });
      return list.setIn([idx, action.axis], action.value);
    });
    seriesList = seriesList.setIn([idxSeriesItem], singlelistItem);

    imState = imState.setIn([...this.path, 'series'], seriesList);

    return imState;
  }
}


