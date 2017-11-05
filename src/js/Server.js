import React from "react";

/**
 * Removed dependency on client. screwing up unit tests in Jest.
 */
// import {getStore} from "./client"

import request from 'superagent';


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

  throw "this will not work because we have no reference to the store." +
  " the connection to the store needs to be somehow fixed, this can be" +
  "done i think with thunks or sagas, but Server.js cannot import client.js or" +
  "tests will break"
  let store = getStore();

  store.dispatch(
    {
      type: ActionTypes.SERVER_RESPONSE,
      endpoint: endpoint,
      state: state,
      payload: responseData
    }
  );
}