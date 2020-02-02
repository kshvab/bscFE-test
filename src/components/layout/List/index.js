import React, { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';

import Context from '../../../globalstore/context';
import { apiPath, tagsTypes } from '../../../config';

const List = props => {
  const { page } = props.match.params;

  console.log(page);

  const { setPage } = useContext(Context);
  let [cardsArr, setCardsArr] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const tasksJson = await fetch(`${apiPath}/tasks`);

      let tasksJsonObj = await tasksJson.json();
      setCardsArr(tasksJsonObj);
    }
    fetchData();
  }, []);

  setPage('List');

  const tagBadge = tag => {
    return (
      <span key={tag} className={`badge badge-${tagsTypes[tag]} mr-2`}>
        {tag}
      </span>
    );
  };

  //-----------PAGINATION------------------//
  const itemsPerPage = 4;
  let len = cardsArr.length;
  let rest = len % itemsPerPage;
  let fullPages = (len - rest) / itemsPerPage;
  let pages = fullPages + 1;

  let pagination;
  if (len > itemsPerPage) {
    let internalButtons = [];
    for (let i = 1; i <= pages; i++) {
      let lWide = 3;
      let rWide = 3;
      if (page === 1) rWide = 5;
      if (page === 2) rWide = 4;
      if (page === +pages) lWide = 5;
      if (page === +pages - 1) lWide = 4;
      if (i > +page - lWide && i < +page + rWide) {
        internalButtons.push(
          <li
            className={classnames('page-item', {
              active: page == i
            })}
          >
            <a class="page-link" href={`${i}`}>
              {i}
            </a>
          </li>
        );
      }
    }

    pagination = (
      <div class="items-pagination">
        <ul class="pagination">
          <li
            className={classnames('page-item', {
              disabled: page == 1
            })}
          >
            <a class="page-link" href="1">
              &laquo;
            </a>
          </li>
          {internalButtons}
          <li
            class={classnames('page-item', {
              disabled: page == pages
            })}
          >
            <a class="page-link" href={`${pages}`}>
              &raquo;
            </a>
          </li>
        </ul>
      </div>
    );
  }

  //-----------/PAGINATION------------------//

  const content = [];

  for (let i = page * itemsPerPage - itemsPerPage; i < cardsArr.length; i++) {
    if (i < page * itemsPerPage) {
      let badges = [];

      cardsArr[i].tags.forEach(element => {
        badges.push(tagBadge(element));
      });

      content.push(
        <div key={i} className="card border-secondary mb-3 k8Card">
          <div className="card-header">{cardsArr[i].agent}</div>
          <div className="card-body">
            <h4 className="card-title">
              <a href={'/taskview/' + cardsArr[i]._id}>{cardsArr[i].title}</a>
            </h4>

            <p className="card-text">{cardsArr[i].description}</p>
            <hr />
            {cardsArr[i].fulltext}
            <hr />
            {badges}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container">
      {pagination}
      <hr />
      {content}
      <hr />
      {pagination}
    </div>
  );
};

export default List;
