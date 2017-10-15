import React from "react";

import MUITextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux'
import {changeLineChartName, createCategory} from '../../../ActionsRedux'


class CategoryForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    this.state = {
      enableButton: false,
    };

  }

  handleSubmit(event) {
    event.preventDefault();

    let val = this.refs.categoryName.input.value

    let category = {
      name: val,
    }
    this.props.createCategory(category);
  }

  onChangeText(e, value) {
    if (!value) {
      this.setState({enableButton: false});
    } else {
      this.setState({enableButton: true});
    }
  }

  colorSelected(color) {
    this.setState({selectedColor: color});
  }

  render() {

    let enableButton = this.state.enableButton;

    let style = {
      "padding": "3px",
      "margin": "3px",
    }

    return (
      <MuiThemeProvider>
        <div style={style}>
          <form onSubmit={this.handleSubmit}>
            <h3>Category :</h3>
            <MUITextField
              hintText="Enter Category Name"
              type="text"
              ref="categoryName"
              onChange={this.onChangeText}


            />
            <RaisedButton type="submit" label="Add Category"
                          disabled={!enableButton}/>
          </form>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    barData: state.app.bar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createCategory: (val) => {
      dispatch(createCategory(val))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryForm)