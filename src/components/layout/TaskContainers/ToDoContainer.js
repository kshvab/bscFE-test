import React, { useContext, useState, setState } from 'react';
import { tagsTypes } from '../../../config';
import Context from '../../../globalstore/context';
const ToDoContainer = props => {
  const { cardsArr } = props;

  const { lang } = useContext(Context);

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
      <div key={i} className="card border-info mb-3 k8Card">
        <div className="card-header">
          {cardsArr[i].agent}

          <div className="k8buttons">
            <img
              className="mr-3"
              src="/images/edit.png"
              alt=""
              width="18"
              height="18"
            />
            <img src="/images/delete.png" alt="" width="18" height="18" />
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{cardsArr[i].title}</h4>
          <p className="card-text">{cardsArr[i].description}</p>
          <hr />
          {badges}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ToDoContainer;
