import React, { useContext } from 'react';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import Context from '../../../globalstore/context';

const droppableStyle = {
  backgroundColor: '#555',
  width: '250px',
  height: '250px',
  margin: '32px'
};

const DndTest = props => {
  const { setPage } = useContext(Context);
  setPage('Test');
  return (
    <div>
      <Droppable id="dr1" style={droppableStyle}>
        <Draggable id="item1" style={{ margin: '8px' }}>
          <div style={{ color: '#fff' }}>Some text 1</div>
        </Draggable>
        <Draggable id="item2" style={{ margin: '8px' }}>
          <div style={{ color: '#fff' }}>Some other text 2</div>
        </Draggable>
      </Droppable>
      <Droppable id="dr2" style={droppableStyle}></Droppable>
    </div>
  );
};
export default DndTest;
