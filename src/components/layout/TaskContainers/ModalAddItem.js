import React, { useState, useContext } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import Context from '../../../globalstore/context';
import { strings, apiPath } from '../../../config';

const ModalAddItem = () => {
  const { lang, isModalAddItemShown, setIsModalAddItemShown } = useContext(
    Context
  );

  function hideMidalAddItem() {
    setIsModalAddItemShown(false);
  }

  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [agent, setAgent] = useState('');
  let [fulltext, setFulltext] = useState('');
  let [tags, setTags] = useState([]);

  let [status, setStatus] = useState('');

  function fChangeTitle(e) {
    setTitle(e.target.value);
  }

  function fChangeDescription(e) {
    setDescription(e.target.value);
  }

  function fChangeAgent(e) {
    setAgent(e.target.value);
  }

  function fChangeFullText(e) {
    setFulltext(e.target.value);
  }

  function fChangeTags(e) {
    const { name, checked } = e.target;
    let tempTags = tags;

    if (checked) {
      if (tempTags.indexOf(name) === -1) tempTags.push(name);
    } else {
      if (tempTags.indexOf(name) !== -1)
        tempTags.splice(tempTags.indexOf(name), 1);
    }
    setTags(tempTags);
  }

  function fChangeStatus(e) {
    const { id } = e.target;
    setStatus(id);
  }

  function fSubmitForm() {
    let postData = {
      agent,
      title,
      description,
      fulltext,
      status,
      tags
    };

    axios.post(`${apiPath}/createtask`, postData).then(function(response) {
      setIsModalAddItemShown(false);
    });
  }

  return (
    <div
      className={classnames('modal', 'fade', 'bd-example-modal-lg', {
        show: isModalAddItemShown
      })}
      id="addItemModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {strings[lang].addTask}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hideMidalAddItem}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-5">
                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputDefault">
                    {strings[lang].title}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={strings[lang].title}
                    id="inputTitle"
                    value={title}
                    onChange={fChangeTitle}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputDescription">
                    {strings[lang].description}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={strings[lang].description}
                    id="inputDescription"
                    value={description}
                    onChange={fChangeDescription}
                  />
                </div>

                <div className="form-group">
                  <label>Agent</label>
                  <select className="custom-select" onChange={fChangeAgent}>
                    <option defaultValue="">
                      {strings[lang].selectAnAgent}
                    </option>
                    <option value="Sam">Sam</option>
                    <option value="Kate">Kate</option>
                    <option value="Helga">Helga</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-group">
                  <label htmlFor="exampleTextarea">
                    {strings[lang].fullText}
                  </label>
                  <textarea
                    className="form-control"
                    id="textareaFulltext"
                    rows="2"
                    value={fulltext}
                    onChange={fChangeFullText}
                  ></textarea>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>{strings[lang].tags}</label>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="contentCheck"
                          name="content"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="contentCheck"
                        >
                          content
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="smmCheck"
                          name="smm"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="smmCheck"
                        >
                          smm
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="designCheck"
                          name="design"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="designCheck"
                        >
                          design
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="devCheck"
                          name="dev"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="devCheck"
                        >
                          dev
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <label>Status</label>
                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="todo"
                          name="customRadio"
                          className="custom-control-input"
                          onChange={fChangeStatus}
                        />
                        <label className="custom-control-label" htmlFor="todo">
                          {strings[lang].toDo}
                        </label>
                      </div>

                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="inwork"
                          name="customRadio"
                          className="custom-control-input"
                          onChange={fChangeStatus}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="inwork"
                        >
                          {strings[lang].inWork}
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="done"
                          name="customRadio"
                          className="custom-control-input"
                          onChange={fChangeStatus}
                        />
                        <label className="custom-control-label" htmlFor="done">
                          {strings[lang].done}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={hideMidalAddItem}
            >
              {strings[lang].close}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={fSubmitForm}
            >
              {strings[lang].save}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddItem;
