import React from "react";

/**
 * Example of functional component
 */
export default function TitleEditComponent(props) {
  return (
    <div>
      <h3>Enter Chart Title Here : </h3>
      <input type="text" value={props.value}onChange={props.onChange} />
    </div>
  );
}

