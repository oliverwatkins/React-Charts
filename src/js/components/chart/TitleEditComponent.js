import React from "react";

import MUITextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


/**
 * Example of functional component
 */
export default function TitleEditComponent(props) {
  return (
  <MuiThemeProvider>
    <div>
      <h3>Title : </h3>

      <MUITextField
        hintText="Enter Chart Title"
        type="text"
        valueCOMMENTED_OUT={props.value}
        onChange={props.onChange}
      />

    </div>
  </MuiThemeProvider>
  );
}

