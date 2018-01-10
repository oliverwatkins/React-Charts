import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import PageLayout from "./PageLayout";
import BarChartPage from "./components/chart/bar/BarChartPage";
import PieChartPage from "./components/chart/pie/PieChartPage";
import XYChartPage from "./components/chart/xy/XYChartPage";
import WelcomePage from "./pages/WelcomePage";

import rootSaga from './components/chart/bar/saga'

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

sagaMiddleware.run(rootSaga);

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>

    <Router history={hashHistory}>
      <Route path="/" component={PageLayout}>
        <IndexRoute component={WelcomePage}></IndexRoute>

        <Route path="bar" component={BarChartPage}></Route>
        <Route path="pie" component={PieChartPage}></Route>
        <Route path="line" component={XYChartPage}></Route>
      </Route>
    </Router>
  </Provider>,
app);

