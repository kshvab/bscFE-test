import { useState } from 'react';

const useGlobalState = () => {
  const [lang, setLang] = useState('EN');
  const [page, setPage] = useState('Home');
  const [isModalAddItemShown, setIsModalAddItemShown] = useState(false);
  return {
    page,
    setPage,
    lang,
    setLang,
    isModalAddItemShown,
    setIsModalAddItemShown
  };
};

export default useGlobalState;
