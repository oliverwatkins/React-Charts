import Immutable from "immutable";

import {pieChartLogic} from './pieChartLogic'

export const MiscActions = {
  FETCH_BAR_DATA : 'FETCH_BAR_DATA',
  SERVER_RESPONSE : 'SERVER_RESPONSE',
};


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
      imState = pieChartLogic.fetchFinished(imState, action)
      break;
    }
    case PieActions.CREATE_SLICE:
      imState = pieChartLogic.createSlice(imState, action.slice);
      break;
    case PieActions.CHANGE_NAME_PIE: //type in name
      imState = pieChartLogic.changeName(imState, action.newName);
      break;
    case PieActions.UPDATE_COLOR:
      //TODO
      // imState = PieChart.(imState, action.newName);
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

//pie
export function enterPieChartName() { //??
  return {
    type: PieActions.ENTER_PIE_CHART_NAME
  }
}

export function addSlice(id) {
  return {
    type: PieActions.ADD_PIE_SLICE,
    id
  }
}
export function createSlice(slice) {
  return {
    type: PieActions.CREATE_SLICE,
    slice
  }
}

export function fetchPieData(value) {
  return {
    type: PieActions.FETCH_PIE_DATA,
    value
  }
}

export function deleteSlice(name) {
  return {
    type: PieActions.DELETE_SLICE,
    name
  }
}
export function changeNamePie(newName) {
  return {
    type: PieActions.CHANGE_NAME_PIE,
    newName
  }
}


//pie
export const PieActions = {
  ENTER_PIE_CHART_NAME: 'ENTER_PIE_CHART_NAME',
  ADD_PIE_SLICE: 'ADD_PIE_SLICE',
  CHANGE_NAME_PIE: 'CHANGE_NAME_PIE',
  CREATE_SLICE: 'CREATE_SLICE',
  FETCH_PIE_DATA:'FETCH_PIE_DATA',
  DELETE_SLICE: 'DELETE_SLICE',
  UPDATE_COLOR: 'UPDATE_COLOR_PIE'
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



