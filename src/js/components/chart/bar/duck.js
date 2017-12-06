import Immutable from "immutable";

export const MiscActions = {
  FETCH_BAR_DATA : 'FETCH_BAR_DATA',
  SERVER_RESPONSE : 'SERVER_RESPONSE',
}


import BarChartEntity from './BarChartEntity'

export function reducer(state = initialState, action) {

  let imState = Immutable.fromJS(state);

  if (!action)
    return imState.toJS();

  switch (action.type) {
    case MiscActions.FETCH_BAR_DATA:

      //TODO is this needed? This action is listened to already in the saga
      // Server.doGetRequest('/bardata');
      break;

    case MiscActions.SERVER_RESPONSE: {
      imState = BarChartEntity.fetchFinished(imState, action)
      break;
    }

    //bar
    case BarActions.CHANGE_NAME_BAR:
      imState = BarChartEntity.changeName(imState, action.newName);
      break;
    case BarActions.CELL_CHANGED:
      imState = BarChartEntity.cellChanged(imState, action)
      break;
    case BarActions.CREATE_SERIES:
      imState = BarChartEntity.createSeries(imState, action)
      break;
    case BarActions.CREATE_CATEGORY:
      imState = BarChartEntity.createCategory(imState, action)
      break;
    case BarActions.DELETE_CATEGORY:
      imState = BarChartEntity.deleteCategory(imState, action)
      break;
    case BarActions.DELETE_SERIES:
      imState = BarChartEntity.deleteSeries(imState, action)
      break;
    case BarActions.UPDATE_COLOR:
      imState = BarChartEntity.updateColor(imState, action)
      break;
    default : {
      // throw 'action not found ' + action.type
    }
  }
  return imState.toJS();
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

//bar
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


const initialState =
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
