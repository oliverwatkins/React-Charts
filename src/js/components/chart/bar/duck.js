import Immutable from "immutable";

export const MiscActions = {
  FETCH_BAR_DATA : 'FETCH_BAR_DATA',
  SERVER_RESPONSE : 'SERVER_RESPONSE',
};

import {barChartLogic} from './barChartLogic'

export function reducer(state = initialState, action) {

  let immutableState = Immutable.fromJS(state); //convert to immutable

  if (!action)
    return immutableState.toJS();

  switch (action.type) {
    case MiscActions.FETCH_BAR_DATA:
      //TODO is this needed? This action is listened to already in the saga
      // Server.doGetRequest('/bardata');
      break;
    case MiscActions.SERVER_RESPONSE: {
      immutableState = barChartLogic.fetchFinished(immutableState, action)
      break;
    }
    case BarActions.CHANGE_NAME_BAR:
      immutableState = barChartLogic.changeName(immutableState, action.newName);
      break;
    case BarActions.CELL_CHANGED:
      immutableState = barChartLogic.cellChanged(immutableState, action)
      break;
    case BarActions.CREATE_SERIES:
      immutableState = barChartLogic.createSeries(immutableState, action)
      break;
    case BarActions.CREATE_CATEGORY:
      immutableState = barChartLogic.createCategory(immutableState, action)
      break;
    case BarActions.DELETE_CATEGORY:
      immutableState = barChartLogic.deleteCategory(immutableState, action)
      break;
    case BarActions.DELETE_SERIES:
      immutableState = barChartLogic.deleteSeries(immutableState, action)
      break;
    case BarActions.UPDATE_COLOR:
      immutableState = barChartLogic.updateColor(immutableState, action)
      break;
    default : {
      //throw 'action not found ' + action.type
    }
  }
  return immutableState.toJS();
}


//bar
export const BarActions = {
  CHANGE_NAME_BAR: 'CHANGE_NAME_BAR',
  CREATE_SERIES: 'CREATE_SERIES',
  CELL_CHANGED: 'CELL_CHANGED',
  CREATE_CATEGORY: 'CREATE_CATEGORY',
  DELETE_SERIES: 'DELETE_SERIES',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  UPDATE_COLOR: 'UPDATE_COLOR_BAR'
}

//bar actions
export function createSeries(series) {
  return {
    type: BarActions.CREATE_SERIES,
    series
  }
}
export function deleteSeries(seriesName) {
  return {
    type: BarActions.DELETE_SERIES,
    seriesName
  }
}
export function updateColorBar(color, seriesName) {
  return {
    type: BarActions.UPDATE_COLOR,
    seriesName,
    color
  }
}
export function updateColorPie(color, seriesName) {
  return {
    type: PieActions.UPDATE_COLOR,
    seriesName,
    color
  }
}
export function changeLineChartName(newName) {
  return {
    type: BarActions.CHANGE_NAME_BAR,
    newName
  }
}
export function createCategory(value) {
  return {
    type: BarActions.CREATE_CATEGORY,
    value
  }
}
export function deleteCategory(categoryName, index) {
  return {
    type: BarActions.DELETE_CATEGORY,
    categoryName,
    index
  }
}
export function changeCell(value) {
  return {
    type: BarActions.CELL_CHANGED,
    value
  }
}

export function fetchBarData(value) {
  return {
    type: MiscActions.FETCH_BAR_DATA,
    value
  }
}





/**
 * Initial state
 */
export const initialState =
  {
    name: "Bar Chart",
    isFetching: true,
    categories: [
      "Apple",
      "Orange",
      "Banana",
      "Peach"
    ],
    series: [
      {
        name: "Mexicoooo",
        color: "red",
        data: [
          {y: 1},
          {y: 2},
          {y: 3},
          {y: 4}
        ]
      },
      {
        name: "Germanyyy",
        color: "orange",
        data: [
          {y: 5},
          {y: 6},
          {y: 7},
          {y: 8}
        ]
      },
      {
        name: "Holland",
        color: "blue",
        data: [
          {x: 1, y: 0},
          {x: 2, y: 0},
          {x: 3, y: 0},
          {x: 4, y: 0}
        ]
      }
    ]
  }
