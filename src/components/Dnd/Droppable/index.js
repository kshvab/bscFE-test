import React from 'react';

let drop = e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('transfer');
  e.target.appendChild(document.getElementById(data));
};

let allowDrop = e => {
  e.preventDefault();
};
const Droppable = props => {
  return (
    <div id={props.id} onDrop={drop} onDragOver={allowDrop} style={props.style}>
      {props.children}
    </div>
  );
};
export default Droppable;
