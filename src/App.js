import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import TaskContainers from './components/layout/TaskContainers';
import List from './components/layout/List';
import DndTest from './components/Dnd/DndTest';
import TaskView from './components/layout/TaskView';
import './App.scss';

import useGlobalState from './globalstore/useGlobalState';
import Context from './globalstore/context';

const App = () => {
  const globalStore = useGlobalState();

  const Routes = () => {
    return (
      <>
        <Route exact path="/" component={TaskContainers} />
        <Route path="/listview/:page" component={List} />
        <Route path="/test" component={DndTest} />
        <Route path="/taskview/:id" component={TaskView} />
      </>
    );
  };

  return (
    <div className="App">
      <Context.Provider value={globalStore}>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
