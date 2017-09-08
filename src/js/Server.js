import React from "react";

import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

import request from 'superagent';

import AppDispatcher from "./AppDispatcher";

import ActionTypes from "./ActionTypes";
export default class Server {

  static doGetRequest(endpoint, params = {}) {

    setTimeout(
      () => {
        request.get("http://localhost:8080/test.json")
          .set('Accept', 'application/json')
          .timeout(1111)
          .query(params)
          .end(handleResponse(endpoint));
      }, 3000
    )
    //
    // request.get("some_kind_of_URL")
    //   .set('Accept','application/json')
    //   .timeout(1111)
    //   .query(params)
    //   .end(handleResponse(endpoint));
  }
}





function handleResponse(endpoint) {
    return function (err, res) {
      if (err && err.timeout === "TIMEOUT") {
        alert('timeout')
        // ServerActionCreator.connectionTimeout(endpoint);
      } else if (res && res.ok) {
        // alert('ok')
        receiveData(endpoint, res);
      } else {
        alert('fail')

        dispatch(endpoint, "FAIL");
        // ServerActionCreator.requestFailed(endpoint);
      }
    };
  }

function  receiveData(endpoint, responseData) {
    console.log('ServerActionCreator.receiveData', responseData.body);
    dispatch(endpoint, "CommunicationState.RESPONSE_OK", responseData.body);
  }


function  dispatch(endpoint, state, responseData = {}) {


    AppDispatcher.dispatch(
      {
        type: ActionTypes.SERVER_RESPONSE,
        endpoint: endpoint,
        state: state,
        payload: responseData
      }
    );
  }


