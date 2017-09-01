import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
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

    const lineClass = location.pathname.match(/^\/line/) ? "active" : "";
    const pieClass = location.pathname.match(/^\/pie/) ? "active" : "";
    const barClass = location.pathname.match(/^\/bar/) ? "active" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Todos</IndexLink>
              </li>
              <li class={barClass}>
                <Link to="bar" onClick={this.toggleCollapse.bind(this)}>Bar</Link>
              </li>
              <li class={lineClass}>
                <Link to="line" onClick={this.toggleCollapse.bind(this)}>Line</Link>
              </li>
              <li class={pieClass}>
                <Link to="pie" onClick={this.toggleCollapse.bind(this)}>Pie</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
