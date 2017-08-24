import React from "react";

/**
 * Example of functional component
 */
export default function TitleComponent(props) {
  return (
    <div>
      <h3>Enter Chart Title Here : </h3>
      <input type="text" className="form-control" onChange={props.onChange} />
    </div>
  );
}

