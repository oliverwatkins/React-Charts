import React from "react";


export default class Footer extends React.Component {

  componentDidMount() {

  }
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; Frontangle.com</p>
          </div>
        </div>
      </footer>
    );
  }
}