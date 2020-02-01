import React, { useContext } from 'react';

import Context from '../../../globalstore/context';

import { strings } from '../../../config';
const List = () => {
  const { lang, setPage } = useContext(Context);

  setPage('List');
  return <div className="container">List</div>;
};

export default List;
