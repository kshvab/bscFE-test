import React, { useContext } from 'react';
import axios from 'axios';
import Context from '../../../globalstore/context';
import { apiPath, tagsTypes } from '../../../config';

const TaskContainer = props => {
  const { cardsArr, cardBorder } = props;

  const { setIsModalEditItemShown, setEditedItem } = useContext(Context);

  function fDeleteTask(e) {
    let { alt } = e.target;

    axios
      .delete(`${apiPath}/deletetask/${alt}`)
      .then(function(response) {
        if (response.data.ok) {
          console.log('DELETED');
          window.location.reload();
        }
      })
      .catch(error => {
        console.log(error);
        window.location.reload();
      });
  }

  function fEditTask(e) {
    let { alt } = e.target;
    setEditedItem(alt);
    setIsModalEditItemShown(true);
  }

  const tagBadge = tag => {
    return (
      <span key={tag} className={`badge badge-${tagsTypes[tag]} mr-2`}>
        {tag}
      </span>
    );
  };

  const content = [];
  for (let i = 0; i < cardsArr.length; i++) {
    let badges = [];

    cardsArr[i].tags.forEach(element => {
      badges.push(tagBadge(element));
    });

    content.push(
      <div key={i} className={`card ${cardBorder} mb-3 k8Card`}>
        <div className="card-header">
          {cardsArr[i].agent}

          <div className="k8buttons">
            <img
              className="mr-3"
              src="/images/edit.png"
              alt={cardsArr[i]._id}
              width="18"
              height="18"
              onClick={fEditTask}
            />
            <img
              src="/images/delete.png"
              alt={cardsArr[i]._id}
              width="18"
              height="18"
              onClick={fDeleteTask}
            />
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <a href={'/taskview/' + cardsArr[i]._id}>{cardsArr[i].title}</a>
          </h4>
          <p className="card-text">{cardsArr[i].description}</p>
          <hr />
          {badges}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default TaskContainer;
