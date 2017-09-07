"use strict";

import {ReduceStore} from "flux/utils";

import Immutable from "immutable";

import AppState from "./AppState.js";
import ActionTypes from "./ActionTypes.js";
import AppDispatcher from "./AppDispatcher.js";

import PieChart from "./entity/PieChart";
import BarChartEntity from "./entity/BarChartEntity";


import request from 'superagent';


class AppStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    var state = AppState;
    return state;
  }

  reduce(state, action) {

    let imState = Immutable.fromJS(state);

    switch (action.type) {

        //pie
      case ActionTypes.CREATE_SLICE:
        imState = PieChart.createSlice(imState, action.slice);
        break;
      case ActionTypes.CHANGE_NAME_PIE:
        imState = PieChart.changeName(imState, action.newName);
        break;

        //bar
      case ActionTypes.CHANGE_NAME_BAR:
        imState = BarChartEntity.changeName(imState, action.newName);
        break;
      case ActionTypes.CELL_CHANGED:
        imState = BarChartEntity.cellChanged(imState, action)
        break;
      case ActionTypes.CREATE_SERIES:
        imState = BarChartEntity.createSeries(imState, action)
        break;
      case ActionTypes.CREATE_CATEGORY:
        imState = BarChartEntity.createCategory(imState, action)
        break;
      case ActionTypes.DELETE_CATEGORY:
        imState = BarChartEntity.deleteCategory(imState, action)
        break;
      case ActionTypes.DELETE_SERIES:
        imState = BarChartEntity.deleteSeries(imState, action)
        break;

      case ActionTypes.FETCH_BAR_DATA:
        doGetRequest('/bardata');
        break;

      case ActionTypes.SERVER_RESPONSE: {
        imState = BarChartEntity.fetchFinished(imState, action)
        break;
      }
    }
    return imState.toJS();
  }
}

// import request from 'superagent';


function doGetRequest(endpoint, params = {}) {

  setTimeout(
    ()=> {
     request.get("some_kind_of_URL_that_will_fail")
      .set('Accept','application/json')
      .timeout(1111)
      .query(params)
      .end(handleResponse(endpoint));
    } , 4000
  )
  //
  // request.get("some_kind_of_URL")
  //   .set('Accept','application/json')
  //   .timeout(1111)
  //   .query(params)
  //   .end(handleResponse(endpoint));
}




function handleResponse(endpoint) {
  return function (err, res) {
    if (err && err.timeout === "TIMEOUT") {
      // ServerActionCreator.connectionTimeout(endpoint);
    } else if (res && res.ok) {
      receiveData(endpoint, res);
    } else {
      dispatch(endpoint, "FAIL");
      // ServerActionCreator.requestFailed(endpoint);
    }
  };
}

function receiveData(endpoint, responseData) {
  console.log('ServerActionCreator.receiveData', responseData.body);
  dispatch(endpoint, "CommunicationState.RESPONSE_OK", responseData.body);
}


function dispatch(endpoint, state, responseData = {}) {
  AppDispatcher.dispatch(
    {
      type: ActionTypes.SERVER_RESPONSE,
      endpoint: endpoint,
      state: state,
      payload: responseData
    }
  );
}

export default new AppStore();
