import React, { useContext, useEffect, useState } from 'react';

import Context from '../../../globalstore/context';
import { apiPath, tagsTypes } from '../../../config';

const TaskView = props => {
  const { id } = props.match.params;

  const { setPage } = useContext(Context);
  let [card, setCard] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const tasksJson = await fetch(`${apiPath}/task/${id}`);

      let taskJsonObj = await tasksJson.json();
      setCard(taskJsonObj);
    }
    fetchData();
  });

  setPage('Home');

  const tagBadge = tag => {
    return (
      <span key={tag} className={`badge badge-${tagsTypes[tag]} mr-2`}>
        {tag}
      </span>
    );
  };

  let badges = [];
  console.log(card);

  if (card.tags) {
    card.tags.forEach(element => {
      badges.push(tagBadge(element));
    });
  }
  let content = (
    <div className="card border-secondary mb-3 k8Card">
      <div className="card-header">{card.agent}</div>
      <div className="card-body">
        <h4 className="card-title">{card.title}</h4>
        <p className="card-text">{card.description}</p>
        <hr />
        {card.fulltext}
        <hr />
        {badges}
      </div>
    </div>
  );

  return <div className="container">{content}</div>;
};

export default TaskView;
