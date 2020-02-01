import React, { useContext } from 'react';

import ToDoContainer from './ToDoContainer';
import InWorkContainer from './InWorkContainer';
import DoneContainer from './DoneContainer';
import ModalAddItem from './ModalAddItem';

import Context from '../../../globalstore/context';
import Filters from './Filters';
import { strings } from '../../../config';

let toDoArr = [
  {
    id: '11',
    agent: 'Sam',
    title: 'To Do card title 1',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    text: '',
    tags: ['dev', 'design']
  },
  {
    id: '12',
    agent: 'Monika',
    title: 'To Do card title 2',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    text: '',
    tags: ['smm', 'content']
  }
];

let inWorkArr = [
  {
    id: '13',
    agent: 'Sam',
    title: 'In Work card title 1',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },
  {
    id: '14',
    agent: 'Sam',
    title: 'In Work card title 2',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }
];

let donekArr = [
  {
    id: '15',
    agent: 'Sam',
    title: 'Done card title 1',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },
  {
    id: '16',
    agent: 'Edith',
    title: 'Done card title 2',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }
];

const TaskContainers = () => {
  const { lang, setPage, setIsModalAddItemShown } = useContext(Context);
  setPage('Home');

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
              <ToDoContainer cardsArr={toDoArr} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="k8Container">
              <div className="card text-white bg-primary mb-3 p-2">
                {strings[lang].inWork}
              </div>
              <InWorkContainer />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="k8Container">
              <div className="card text-white bg-success mb-3 p-2">
                {strings[lang].done}
              </div>
              <DoneContainer />
            </div>
          </div>
        </div>
      </div>
      <ModalAddItem />
    </>
  );
};

export default TaskContainers;
