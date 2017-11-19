import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import PageLayout from "./PageLayout";
import BarChartPage from "./components/chart/bar/BarChartPage";
import PieChartPage from "./components/chart/pie/PieChartPage";
import LineChartPage from "./components/chart/line/LineChartPage";
import WelcomePage from "./pages/WelcomePage";

import { Provider } from 'react-redux'

import AppReducer from './AppReducer.js'
import {reducer as barReducer} from './components/chart/bar/duck.js'
import {reducer as lineReducer} from './components/chart/line/duck.js'
import {reducer as pieReducer} from './components/chart/pie/duck.js'

import { createStore, combineReducers } from 'redux'



let combined = combineReducers({
  line: lineReducer,
  pie: pieReducer,
  bar: barReducer
})

//BAD!!!! this is calling code while loading app...
// const store = createStore(AppReducer)

const store = createStore(combined)

//not very pretty solution :(
export function getStore() {
  return store
}

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>

    <Router history={hashHistory}>
      <Route path="/" component={PageLayout}>
        <IndexRoute component={WelcomePage}></IndexRoute>

        <Route path="bar" component={BarChartPage}></Route>
        <Route path="pie" component={PieChartPage}></Route>
        <Route path="line" component={LineChartPage}></Route>
      </Route>
    </Router>
  </Provider>,

app);

