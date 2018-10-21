import Immutable from "immutable";

import {xyChartLogic} from './xyChartLogic'



export function reducer(state = initialState, action) {

  let imState = Immutable.fromJS(state);

  if (!action)
    return imState.toJS();
  // debugger;

  switch (action.type) {

    case XYActions.CREATE_SERIES_XY:
      imState = xyChartLogic.createXYSeries(imState, action);
      break;
    case XYActions.DELETE_SERIES_XY:
      imState = xyChartLogic.deleteXYSeries(imState, action);
      break;
    case XYActions.CHANGE_CELL_XY:
      imState = xyChartLogic.changeCellXY(imState, action);
      break;
    case XYActions.CHANGE_NAME_XY:
      imState = xyChartLogic.changeXYChartName(imState, action);
      break;

    case XYActions.CHANGE_SERIES_NAME_XY:
      imState = xyChartLogic.changeXYSeriesName(imState, action);
      break;








    case XYActions.CHANGE_POINT_XY:
      imState = xyChartLogic.changeXYPoint(imState, action);
      break;
    case XYActions.CHANGE_COLOR_XY:
      imState = xyChartLogic.changeXYColor(imState, action);
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
  CHANGE_CELL_XY: 'CHANGE_CELL_XY',
  CHANGE_COLOR_XY: 'CHANGE_COLOR_XY',
  CHANGE_NAME_XY: 'CHANGE_NAME_XY',
  CHANGE_SERIES_NAME_XY: 'CHANGE_SERIES_NAME_XY',
  CHANGE_POINT_XY: 'CHANGE_POINT_XY'
};

export function createFetchXYDataAction() {
  return {
  }
}
export function createUpdateColorXYAction(newColor, seriesName) {
  return {
    type: XYActions.CHANGE_COLOR_XY,
    name: seriesName,
    newColor: newColor
  }
}

export function createChangeXYChartNameAction(newName) {
  return {
    type: XYActions.CHANGE_NAME_XY,
    name: newName,
  }
}

export function createChangeXYSeriesNameAction(name, newName) {
  return {
    type: XYActions.CHANGE_SERIES_NAME_XY,
    name: name,
    newName: newName,
  }
}



//xy actions
export function createCreateXYSeriesAction(series) {
  return {
    type: XYActions.CREATE_SERIES_XY,
    name: "TODO",//series.name,
    color: "green"//series.color
  }
}
export function createDeleteXYSeriesAction(seriesName) {
  return {
    type: XYActions.DELETE_SERIES_XY,
    name: seriesName,
  }
}

export function createChangePointAction(seriesName, point) {
  return {
    type: XYActions.CHANGE_POINT_XY,
    name: seriesName,
    point: point,
  }
}

export function createChangeColorAction(seriesName, newColor) {
  return {
    type: XYActions.CHANGE_COLOR_XY,
    name: seriesName,
    color: newColor,
  }
}

export function createChangeCellXYAction(seriesValues) {
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
    name: "My XY Chart",
    isFetching: true,
    series: [
      {
        name: "Series1",
        color: "red",
        shape:"square",
        data: [
          {x:2, y: 3},
          {x:4, y: 6},
          {x:7, y: 8},
          {x:9, y: 23}
        ]
      }
      ,
      {
        name: "Series2",
        shape:"diamond",
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
