import Immutable from "immutable";

import {pieChartLogic} from './pieChartLogic'

export function reducer(state = initialState, action) {

  let imState = Immutable.fromJS(state);

  if (!action)
    return imState.toJS();

  switch (action.type) {

    case PieActions.FETCH_PIE_DATA:
      //TODO is this needed? This action is listened to already in the saga
      // Server.doGetRequest('/bardata');
      break;
    case PieActions.PIE_DATA_FETCHED:
      imState = pieChartLogic.fetchFinished(imState, action)
      break;
    case PieActions.CREATE_SLICE:
      imState = pieChartLogic.createSlice(imState, action.slice);
      break;
    case PieActions.CHANGE_NAME_PIE:
      imState = pieChartLogic.changeName(imState, action.newName);
      break;
    case PieActions.UPDATE_COLOR_PIE:
      imState = pieChartLogic.changePieChartSliceColor(imState, action.sliceName, action.color);
      break;
    case PieActions.DELETE_SLICE:
      imState = pieChartLogic.deleteSlice(imState, action.name);
      break;
    default : {
      // throw 'asdfasdfasd action not found ' + action.type
    }
  }
  return imState.toJS();
}

//pie action creators
export function createEnterPieChartNameAction() { //??
  return {
    type: PieActions.ENTER_PIE_CHART_NAME
  }
}

export function createAddSliceAction(id) {
  return {
    type: PieActions.ADD_PIE_SLICE,
    id
  }
}
export function createCreateSliceAction(slice) {
  return {
    type: PieActions.CREATE_SLICE,
    slice
  }
}

export function createFetchPieDataAction(value) {
  return {
    type: PieActions.FETCH_PIE_DATA,
    value
  }
}

export function createDeleteSliceAction(name) {
  return {
    type: PieActions.DELETE_SLICE,
    name
  }
}
export function createChangeNamePieAction(newName) {
  return {
    type: PieActions.CHANGE_NAME_PIE,
    newName
  }
}
export function createChangePieSliceColorAction(color, name) {
  return {
    type: PieActions.UPDATE_COLOR_PIE,
    sliceName: name,
    color: color
  }
}

//pie
export const PieActions = {
  ENTER_PIE_CHART_NAME: 'ENTER_PIE_CHART_NAME',
  ADD_PIE_SLICE: 'ADD_PIE_SLICE',
  CHANGE_NAME_PIE: 'CHANGE_NAME_PIE',
  CREATE_SLICE: 'CREATE_SLICE',
  FETCH_PIE_DATA:'FETCH_PIE_DATA',
  PIE_DATA_FETCHED: 'PIE_DATA_FETCHED',
  DELETE_SLICE: 'DELETE_SLICE',
  UPDATE_COLOR_PIE: 'UPDATE_COLOR_PIE'
}

const initialState =
  {
    name: "Pie Chart",
    isFetching: true,
    data: [
      {
        "name":"Apple",
        "value":13,
        "color":"red",
      }, {
        "name":"Orange",
        "value":54,
        "color":"blue",
      }, {
        "name":"Banana",
        "value":54,
        "color":"yellow",
      }
    ]
  }