import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Todos from "./pages/Todos";
import PageLayout from "./PageLayout";
import LineChart from "./pages/LineChart";
import PieChartPage from "./pages/PieChartPage";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PageLayout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="line" component={LineChart}></Route>
      <Route path="pie" component={PieChartPage}></Route>
    </Route>
  </Router>,
  app);