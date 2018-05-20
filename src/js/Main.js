import React from "react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Switch, Route, withRouter } from 'react-router-dom'
import BarChartPage from "./components/chart/bar/ui/BarChartContainer";
import PieChartPage from "./components/chart/pie/ui/PieChartContainer";
import XYChartPage from "./components/chart/xy/ui/XYChartPage";
import WelcomePage from "./components/WelcomePage";

import './style.less';
import { AnimatedSwitch } from 'react-router-transition';

/**
 *
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
class Main extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav/>
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">

              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route exact path='/' component={WelcomePage}/>
                <Route path='/bar' component={BarChartPage}/>
                <Route path='/pie' component={PieChartPage}/>
                <Route path='/line' component={XYChartPage}/>
              </AnimatedSwitch>

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default withRouter(Main)