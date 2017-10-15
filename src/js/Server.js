import React from "react";

import request from 'superagent';

import AppDispatcher from "./AppDispatcher";

import {Provider} from 'react-redux'


import ActionTypes from "./ActionTypes";

export default class Server {

  static doGetRequest(endpoint, params = {}) {

    //fake some server lag.

    setTimeout(
      () => {
        request.get("test.json")
          .set('Accept', 'application/json')
          .timeout(1111)
          .query(params)
          .end(handleResponse(endpoint));
      }, 3000
    )
  }
}

function handleResponse(endpoint) {
  return function (err, res) {
    if (err && err.timeout === "TIMEOUT") {
      alert('timeout!!!')
    } else if (res && res.ok) {
      receiveData(endpoint, res);
    } else {
      dispatch(endpoint, "FAIL");
    }
  };
}

function receiveData(endpoint, responseData) {
  console.log('ServerActionCreator.receiveData', responseData.body);
  dispatch(endpoint, "CommunicationState.RESPONSE_OK", responseData.body);
}


function dispatch(endpoint, state, responseData = {}) {

  console.info('Provider ' + Provider)

  console.info('Provider.getSTore ' + Provider.getStore())


  AppDispatcher.dispatch(
    {
      type: ActionTypes.SERVER_RESPONSE,
      endpoint: endpoint,
      state: state,
      payload: responseData
    }
  );
}


function dispatch_old(endpoint, state, responseData = {}) {

  AppDispatcher.dispatch(
    {
      type: ActionTypes.SERVER_RESPONSE,
      endpoint: endpoint,
      state: state,
      payload: responseData
    }
  );
}

