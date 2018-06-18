import Immutable from "immutable";

import {xyChartLogic} from './xyChartLogic'



export function reducer(state = initialState, action) {

  let imState = Immutable.fromJS(state);

  if (!action)
    return imState.toJS();

  switch (action.type) {

    case XYActions.CREATE_SERIES_XY:
      imState = xyChartLogic.createXYSeries(imState, action)
      break;
    case XYActions.DELETE_SERIES_XY:
      imState = xyChartLogic.deleteXYSeries(imState, action)
      break;
    case XYActions.CHANGE_CELL_XY:
      imState = xyChartLogic.changeCellXY(imState, action)
      break;

    default : {
      // throw 'actionX not found ' + action.type
    }
  }
  return imState.toJS();
}


//xy
export const XYActions = {
  CREATE_SERIES_XY: 'CREATE_SERIES_XY',
  DELETE_SERIES_XY: 'DELETE_SERIES_XY',
  CHANGE_CELL_XY: 'CHANGE_CELL_XY'
}


export function fetchXYData() {
  return {
  }
}
export function updateColorXY() {
  return {
  }
}

export function changeXYChartName() {
  return {
  }
}

//xy actions
export function createXYSeries(series) {
  return {
    type: XYActions.CREATE_SERIES_XY,
    name: series.name,
    color: series.color
  }
}
export function deleteXYSeries(series) {
  return {
    type: XYActions.DELETE_SERIES_XY,
    name: series.name,
  }
}
export function changeCellXY(seriesValues) {
  return {
    type: XYActions.CHANGE_CELL_XY,
    seriesName: seriesValues.name,
    axis: seriesValues.axis,
    row: seriesValues.row,
    value: seriesValues.value
  }
}




const initialState =
  {
    name: "XY Chart",
    isFetching: true,
    series: [
      {
        name: "Series1",
        color: "red",
        data: [
          {x:2, y: 3},
          {x:4, y: 6},
          {x:7, y: 8},
          {x:9, y: 23}
        ]
      },
      {
        name: "Series2",
        color: "blue",
        data: [
          {x:3, y: 5},
          {x:5, y: 11},
          {x:6, y: 12},
          {x:12, y: 25}
        ]
      }
    ]
  }
