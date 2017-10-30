import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import PageLayout from "./PageLayout";
import BarChartPage from "./pages/BarChartPage";
import PieChartPage from "./pages/PieChartPage";
import LineChartPage from "./pages/LineChartPage";
import WelcomePage from "./pages/WelcomePage";

import { Provider } from 'react-redux'

import AppReducer from './AppReducer'

import { createStore } from 'redux'

const store = createStore(AppReducer)

//not very pretty solution :(
export function getStore() {
  return store
}

let app = {};

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

