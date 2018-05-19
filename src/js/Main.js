import React from "react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Switch, Route } from 'react-router-dom'
import BarChartPage from "./components/chart/bar/ui/BarChartContainer";
import PieChartPage from "./components/chart/pie/ui/PieChartContainer";
import XYChartPage from "./components/chart/xy/ui/XYChartPage";
import WelcomePage from "./components/WelcomePage";

/**
 *

 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
export default class Main extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav location={location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              <Switch>
                <Route exact path='/' component={WelcomePage}/>
                <Route path='/bar' component={BarChartPage}/>
                <Route path='/pie' component={PieChartPage}/>
                <Route path='/line' component={XYChartPage}/>
              </Switch>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}