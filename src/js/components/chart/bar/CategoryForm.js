import React from "react";
import TitleEditComponent from '../TitleEditComponent'
import ColorChooser from '../ColorChooser'
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

        <div className="css-form">
          <div className="col-xs-10">
            <div className="col-xs-9">
              <h3>Add Category :</h3>
            </div>
          </div>

          <div className="input-group col-xs-9">
            <input type="text" ref="categoryName" className="form-control" onChange={this.handleChartSliceChange}
                   name="newSlice" placeholder="Series Name"></input>
          </div>
          <button type="submit" value="Add Catgeory" className="button">Add Category</button>
        </div>
      </form>
    )
  }
}