import React from "react";

export default class TitleComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>Enter Chart Title Here : </h3>
        <input type="text" className="form-control" onChange={this.props.onChange} />
      </div>
    );
  }
}

