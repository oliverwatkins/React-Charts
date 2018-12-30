import React from "react";
import {Link, withRouter} from "react-router-dom";

import './style.less';
import PieIcon from "./PieIcon";
import BarIcon from "./BarIcon";

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const {location} = this.props;
    const {collapsed} = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    let lineClass = location.pathname.match(/^\/line/) ? "active" : "";
    let pieClass = location.pathname.match(/^\/pie/) ? "active" : "";
    let barClass = location.pathname.match(/^\/bar/) ? "active" : "";

    barClass = barClass + " bar-chart";
    lineClass = lineClass + " line-chart";
    pieClass = pieClass + " pie-chart";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}></Link>
              </li>
              <li >
                <Link to="bar" onClick={this.toggleCollapse.bind(this)} className={barClass}>


									<div style={{display:"flex"}}>
										<BarIcon></BarIcon>
										<div style={{margin:"0 0 0 10px"}}> Bar </div>
									</div>
                </Link>
              </li>
              <li>
                <Link to="line" onClick={this.toggleCollapse.bind(this)} className={lineClass}>
                  XY
                </Link>
              </li>
              <li >

                <Link to="pie" onClick={this.toggleCollapse.bind(this)} className={pieClass}>
                  <div style={{display:"flex"}}>
                   <PieIcon></PieIcon>
										             <div style={{margin:"0 0 0 10px"}}> Pie </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

//HOC gives Nav access to routing objects
export default withRouter(Nav)