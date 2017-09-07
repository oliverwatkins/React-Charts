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
        fetchBarData();
        break;

      case ActionTypes.SERVER_RESPONSE: {

        // alert("here " + action.state);
        imState = BarChartEntity.fetchFinished(imState, action)
        break;

        // BarChartEntity.setIsFetching()
        // if (action.endpoint == '/evaluation') {
        //   if (action.state == CommunicationState.RESPONSE_OK) {
        //     state = ResultEntity.setData(state, action.payload.values);
        //   }
        // }
        break;
      }
    }
    return imState.toJS();
  }
}

function fetchBarData() {
  doGetRequest('/bardata');
}


function doGetRequest(endpoint, params = {}) {
  var url = "some blah blah" //API_URL + endpoint;
  // abortPendingRequests(endpoint);

  console.log("GET REQUEST; params=", params);

  request.get(url)
    .set('Accept','application/json')
    .timeout(1111)
    .query(params)
    .end(handleResponse(endpoint));


  // _pendingRequests[endpoint] =
  //   request.get(url)
  //     .set('Accept','application/json')
  //     .timeout(TIMEOUT)
  //     .query(params)
  //     .end(handleResponse(endpoint));
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
