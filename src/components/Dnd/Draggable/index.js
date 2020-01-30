import React from 'react';

let drag = e => {
  e.dataTransfer.setData('transfer', e.target.id);
};

let noAllowDrop = e => {
  e.stopPropagation();
};

const Draggable = props => {
  return (
    <div
      id={props.id}
      draggable="true"
      onDragStart={drag}
      onDragOver={noAllowDrop}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
export default Draggable;
