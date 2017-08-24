import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Todos from "./pages/Todos";
import PageLayout from "./PageLayout";
import LineChartPage from "./pages/LineChartPage";
import PieChartPage from "./pages/PieChartPage";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PageLayout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="line" component={LineChartPage}></Route>
      <Route path="pie" component={PieChartPage}></Route>
    </Route>
  </Router>,
  app);