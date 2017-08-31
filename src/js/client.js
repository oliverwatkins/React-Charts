import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import PageLayout from "./PageLayout";
import BarChartPage from "./pages/BarChartPage";
import PieChartPage from "./pages/PieChartPage";
import WelcomePage from "./pages/WelcomePage";

const app = document.getElementById('app');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PageLayout}>
      <IndexRoute component={WelcomePage}></IndexRoute>

      <Route path="line" component={BarChartPage}></Route>
      <Route path="pie" component={PieChartPage}></Route>
    </Route>
  </Router>,
  app);