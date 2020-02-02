import { useState } from 'react';

const useGlobalState = () => {
  const [lang, setLang] = useState('EN');
  const [page, setPage] = useState('Home');
  const [isModalAddItemShown, setIsModalAddItemShown] = useState(false);
  const [isModalEditItemShown, setIsModalEditItemShown] = useState(false);
  const [editedItem, setEditedItem] = useState('');
  const [filterAgent, setFilterAgent] = useState('');
  const [filterSearch, setFilterSearch] = useState('');
  const [isTagContentActive, setIsTagContentActive] = useState(false);
  const [isTagSmmActive, setIsTagSmmActive] = useState(false);
  const [isTagDesignActive, setIsTagDesignActive] = useState(false);
  const [isTagDevActive, setIsTagDevActive] = useState(false);

  return {
    page,
    setPage,
    lang,
    setLang,
    isModalAddItemShown,
    setIsModalAddItemShown,
    isModalEditItemShown,
    setIsModalEditItemShown,
    editedItem,
    setEditedItem,
    filterAgent,
    setFilterAgent,
    filterSearch,
    setFilterSearch,
    isTagContentActive,
    setIsTagContentActive,
    isTagSmmActive,
    setIsTagSmmActive,
    isTagDesignActive,
    setIsTagDesignActive,
    isTagDevActive,
    setIsTagDevActive
  };
};

export default useGlobalState;
