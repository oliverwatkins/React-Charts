import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter} from "react-router-dom";

import Main from "./Main";
import rootSaga from './components/chart/saga'

import { Provider } from 'react-redux'

import createSagaMiddleware from 'redux-saga'

import {reducer as barReducer} from './components/chart/bar/duck.js'
import {reducer as xyReducer} from './components/chart/xy/duck.js'
import {reducer as pieReducer} from './components/chart/pie/duck.js'

import { createStore, combineReducers , applyMiddleware, compose} from 'redux'

let combinedReducers = combineReducers({
  xy: xyReducer,
  pie: pieReducer,
  bar: barReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

//setup saga middleware
sagaMiddleware.run(rootSaga);

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>,
app);



