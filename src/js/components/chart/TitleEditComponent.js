import React from "react";


import MUITextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class TitleEditComponent extends React.Component {

  constructor(){
    super()
    this.keyPress = this.keyPress.bind(this);
    this.keyPress = debounce(this.keyPress,1000);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h3>Title : </h3>

          <MUITextField
            tooltip="test"
            ref="titleField"
            hintText="Enter Chart Title"
            type="text"
            valueCOMMENTED_OUT={this.props.value}
            onChange={this.keyPress}
          />

        </div>
      </MuiThemeProvider>
    )
  }

  keyPress(e) {
    e.persist();
    let val = this.refs.titleField.input.value
    this.props.onChange(val);
  }
}

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


