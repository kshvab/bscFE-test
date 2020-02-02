import React, { useContext, useState } from 'react';
import Context from '../../../globalstore/context';
import { strings } from '../../../config';
import classnames from 'classnames';

const Filters = () => {
  const {
    lang,
    setFilterAgent,
    filterAgent,
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
  } = useContext(Context);

  let [filterSearchInput, setFilterSearchInput] = useState('');

  //------- F-s --------------
  function fChangeSearchInput(e) {
    setFilterSearchInput(e.target.value);
  }

  function fChangeFilterAgent(e) {
    setFilterAgent(e.target.value);
  }

  function fchangeFilterSearch() {
    setFilterSearch(filterSearchInput);
  }

  function fchangeFilterTags(e) {
    const { innerHTML } = e.target;
    if (innerHTML === 'content') setIsTagContentActive(!isTagContentActive);
    if (innerHTML === 'smm') setIsTagSmmActive(!isTagSmmActive);
    if (innerHTML === 'design') setIsTagDesignActive(!isTagDesignActive);
    if (innerHTML === 'dev') setIsTagDevActive(!isTagDevActive);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-2">
            <span className="mr-2">{strings[lang].tags}:</span>
            <span
              className={classnames(
                'badge',
                {
                  'badge-success': isTagContentActive
                },
                {
                  'badge-secondary': !isTagContentActive
                },
                'mr-2',
                'k8badgesbuttons'
              )}
              name="content"
              onClick={fchangeFilterTags}
            >
              content
            </span>
            <span
              className={classnames(
                'badge',
                {
                  'badge-warning': isTagSmmActive
                },
                {
                  'badge-secondary': !isTagSmmActive
                },
                'mr-2',
                'k8badgesbuttons'
              )}
              name="smm"
              onClick={fchangeFilterTags}
            >
              smm
            </span>
            <span
              className={classnames(
                'badge',
                {
                  'badge-info': isTagDesignActive
                },
                {
                  'badge-secondary': !isTagDesignActive
                },
                'mr-2',
                'k8badgesbuttons'
              )}
              name="design"
              onClick={fchangeFilterTags}
            >
              design
            </span>
            <span
              className={classnames(
                'badge',
                {
                  'badge-dark': isTagDevActive
                },
                {
                  'badge-secondary': !isTagDevActive
                },
                'mr-2',
                'k8badgesbuttons'
              )}
              name="dev"
              onClick={fchangeFilterTags}
            >
              dev
            </span>
          </div>
          <div className="col-lg-2 my-1">
            <select className="custom-select" onChange={fChangeFilterAgent}>
              <option value="">{strings[lang].agent}</option>
              <option value="Sam" selected={filterAgent === 'Sam'}>
                Sam
              </option>
              <option value="Kate" selected={filterAgent === 'Kate'}>
                Kate
              </option>
              <option value="Helga" selected={filterAgent === 'Helga'}>
                Helga
              </option>
            </select>
          </div>

          <div className="col-lg-4 my-1">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                onChange={fChangeSearchInput}
                value={filterSearch ? filterSearch : filterSearchInput}
              />

              <div className="input-group-append">
                <button
                  className="input-group-text"
                  onClick={fchangeFilterSearch}
                >
                  {filterSearch ? strings[lang].cancel : strings[lang].search}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Filters;
