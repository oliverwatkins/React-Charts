import React from 'react';

const List = props => (
  <div>
    <div className="unique"/>
    <ul>

      {
        props.items.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
  </div>
);
export default List;
