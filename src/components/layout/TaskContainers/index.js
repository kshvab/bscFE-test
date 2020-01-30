import React from 'react';
import ToDoContainer from './ToDoContainer';
import InWorkContainer from './InWorkContainer';
import DoneContainer from './DoneContainer';

let toDoArr = [
  {
    id: '11',
    agent: 'Sam',
    title: 'To Do card title 1',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    text: '',
    tags: ['adsense', 'dev', 'design']
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
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="k8Container">
            <div className="k8ContainerTitleCard text-white bg-info mb-3 p-2">
              To do
              <div className="addbutton">
                <img src="/images/add.png" alt="" width="19" height="19" />
              </div>
            </div>
            <ToDoContainer cardsArr={toDoArr} />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="k8Container">
            <div className="card text-white bg-primary mb-3 p-2">In work</div>
            <InWorkContainer />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="k8Container">
            <div className="card text-white bg-success mb-3 p-2">Done</div>
            <DoneContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskContainers;
