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
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3>Category :</h3>
            <input type="text" ref="categoryName"
                         onChange={this.handleChartSliceChange}
                         name="newSlice" placeholder="Series Name">
            </input>
            <input type="submit" value="Add Category" className="button"/>
        </div>
      </form>
    )
  }
}