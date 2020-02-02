import React, { useState, useEffect, useContext } from 'react';

import TaskContainer from './TaskContainer';
import ModalAddItem from './ModalAddItem';
import ModalEditItem from './ModalEditItem';
import Context from '../../../globalstore/context';
import Filters from './Filters';
import { strings, apiPath } from '../../../config';

const TaskContainers = () => {
  const {
    lang,
    setPage,
    setIsModalAddItemShown,
    filterAgent,
    filterSearch,
    isTagContentActive,

    isTagSmmActive,

    isTagDesignActive,

    isTagDevActive
  } = useContext(Context);

  //------------ Title ---------------//
  setPage('Home');

  //---------- hook block ------------//

  let [toDoArr, setTodoArr] = useState([]);
  let [inWorkArr, setInWorkArr] = useState([]);
  let [doneArr, setDoneArr] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //------- Fetch --------
      const tasksJson = await fetch(`${apiPath}/tasks`);
      let tasksJsonObj = await tasksJson.json();

      //---------FILTERS --------
      if (filterAgent)
        tasksJsonObj = tasksJsonObj.filter(function(elem) {
          return elem.agent === filterAgent;
        });

      if (filterSearch) {
        tasksJsonObj = tasksJsonObj.filter(function(elem) {
          return elem.title.indexOf(filterSearch) !== -1;
        });
      }

      if (
        isTagContentActive ||
        isTagSmmActive ||
        isTagDesignActive ||
        isTagDevActive
      ) {
        let tagContentArr = [],
          tagSmmArr = [],
          tagDesignArr = [],
          tagDevArr = [];

        if (isTagContentActive)
          tagContentArr = tasksJsonObj.filter(function(elem) {
            return elem.tags.indexOf('content') !== -1;
          });
        if (isTagSmmActive)
          tagSmmArr = tasksJsonObj.filter(function(elem) {
            return elem.tags.indexOf('smm') !== -1;
          });
        if (isTagDesignActive)
          tagDesignArr = tasksJsonObj.filter(function(elem) {
            return elem.tags.indexOf('design') !== -1;
          });
        if (isTagDevActive)
          tagDevArr = tasksJsonObj.filter(function(elem) {
            return elem.tags.indexOf('dev') !== -1;
          });

        tasksJsonObj = tagContentArr.concat(tagSmmArr, tagDesignArr, tagDevArr);
      }

      // ----------- Creating Categories --------
      let tempToDoArr = tasksJsonObj.filter(function(elem) {
        return elem.status === 'todo';
      });
      setTodoArr(tempToDoArr);

      let tempInWorkArr = tasksJsonObj.filter(function(elem) {
        return elem.status === 'inwork';
      });
      setInWorkArr(tempInWorkArr);

      let tempDoneArr = tasksJsonObj.filter(function(elem) {
        return elem.status === 'done';
      });
      setDoneArr(tempDoneArr);
    }
    fetchData();
  }, []);

  //-------- functions block ---------//
  function fShowModalAddItem() {
    setIsModalAddItemShown(true);
  }

  return (
    <>
      <div className="container">
        <Filters />
        <div className="row">
          <div className="col-lg-4">
            <div className="k8Container">
              <div className="k8ContainerTitleCard text-white bg-info mb-3 p-2">
                {strings[lang].toDo}
                <div className="addbutton">
                  <img
                    src="/images/add.png"
                    alt=""
                    width="19"
                    height="19"
                    onClick={fShowModalAddItem}
                  />
                </div>
              </div>
              <TaskContainer cardsArr={toDoArr} cardBorder="border-info" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="k8Container">
              <div className="k8ContainerTitleCard text-white bg-primary mb-3 p-2">
                {strings[lang].inWork}
                <div className="addbutton">
                  <img
                    src="/images/add.png"
                    alt=""
                    width="19"
                    height="19"
                    onClick={fShowModalAddItem}
                  />
                </div>
              </div>
              <TaskContainer cardsArr={inWorkArr} cardBorder="border-primary" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="k8Container">
              <div className="k8ContainerTitleCard text-white bg-success mb-3 p-2">
                {strings[lang].done}
                <div className="addbutton">
                  <img
                    src="/images/add.png"
                    alt=""
                    width="19"
                    height="19"
                    onClick={fShowModalAddItem}
                  />
                </div>
              </div>
              <TaskContainer cardsArr={doneArr} cardBorder="border-success" />
            </div>
          </div>
        </div>
      </div>
      <ModalAddItem />
      <ModalEditItem />
    </>
  );
};

export default TaskContainers;
