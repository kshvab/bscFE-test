import React from 'react';

import Navbar from './components/layout/navbar';
import TaskContainers from './components/layout/TaskContainers';

import DndTest from './components/Dnd/DndTest';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <br />
      <TaskContainers />

      <br />
      <hr />
      <DndTest />
    </div>
  );
};

export default App;
