import React from "react";

import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
export default class PageLayout extends React.Component {
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
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
