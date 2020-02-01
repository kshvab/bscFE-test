import React, { useContext } from 'react';
import Context from '../../../globalstore/context';
import { strings } from '../../../config';

const Filters = () => {
  const { lang } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-2">
            <span className="mr-2">{strings[lang].tags}:</span>
            <span className="badge badge-secondary mr-2">content</span>
            <span className="badge badge-secondary mr-2">smm</span>
            <span className="badge badge-secondary mr-2">design</span>
            <span className="badge badge-secondary mr-2">dev</span>
          </div>
          <div className="col-lg-2 my-1">
            <select className="custom-select">
              <option defaultValue="">{strings[lang].agent}</option>
              <option value="Dave">Dave</option>
              <option value="Sam">Sam</option>
              <option value="Monika">Monika</option>
              <option value="Kate">Kate</option>
            </select>
          </div>

          <div className="col-lg-4 my-1">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="input-group-append">
                <button className="input-group-text">
                  {strings[lang].search}
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
