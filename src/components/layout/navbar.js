import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../globalstore/context';
import { strings } from '../../config';
import classnames from 'classnames';

const Navbar = () => {
  const { lang, setLang, page } = useContext(Context);

  localStorage.getItem('lang');

  if (localStorage.getItem('lang') === 'CZ') setLang('CZ');

  document.title = strings[lang].siteName;

  if (page === 'Home') {
    document.title = strings[lang].pageNameHome + ' - ' + document.title;
  } else if (page === 'List') {
    document.title = strings[lang].pageNameList + ' - ' + document.title;
  }

  let [mobMenuIsOpen, setMobMenuIsOpen] = useState(false);

  function fChangeLang() {
    if (lang === 'EN') {
      setLang('CZ');
      localStorage.setItem('lang', 'CZ');
    } else {
      setLang('EN');
      localStorage.setItem('lang', 'EN');
    }
  }

  function fchangeMomMenu() {
    setMobMenuIsOpen(!mobMenuIsOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/#">
          {strings[lang].siteName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={fchangeMomMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={classnames('collapse', 'navbar-collapse', {
            show: mobMenuIsOpen
          })}
          id="navbarColor01"
        >
          <ul className="navbar-nav mr-auto">
            <li
              className={classnames('nav-item', {
                active: page === 'Home'
              })}
            >
              <Link className="nav-link" to="/">
                {strings[lang].pageNameHome}
              </Link>
            </li>
            <li
              className={classnames('nav-item', {
                active: page === 'List'
              })}
            >
              <Link className="nav-link" to="/listview/1">
                {strings[lang].pageNameList}
              </Link>
            </li>
            <li
              className={classnames('nav-item', {
                active: page === 'Test'
              })}
            >
              <Link className="nav-link" to="/test">
                {strings[lang].pageNameDrugNDrop}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={fChangeLang}
          >
            <img
              className="mr-2"
              src="/images/lang.png"
              alt=""
              width="24"
              height="24"
            />
            {lang}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
