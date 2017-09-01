import React from "react";
import Actions from "../../../../js/Actions";

import ReactDOM from "react-dom";

export default class CategoryForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const val = ReactDOM.findDOMNode(this.refs.categoryName).value;

    let category = {
      name: val,
    }
    Actions.createCategory(category);
  }

  handleChartNameChange(event) {
    Actions.changeLineChartName(event.currentTarget.value);
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  render() {

    let style = {
      "padding": "3px",
      "margin": "3px"
    }

    return (

      <div style={style}>
        <form onSubmit={this.handleSubmit}>

          <h3>Category :</h3>
          <input style={style} type="text" ref="categoryName"
                 onChange={this.handleChartSliceChange}
                 name="newSlice" placeholder="Series Name">
          </input>

          <input style={style} type="submit" value="Add Category" className="button"/>
        </form>
      </div>
    )
  }
}