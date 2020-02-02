import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import Context from '../../../globalstore/context';
import { strings, apiPath } from '../../../config';

const ModalEditItem = () => {
  const {
    lang,
    isModalEditItemShown,
    setIsModalEditItemShown,
    editedItem
  } = useContext(Context);

  function hideModalEditItem() {
    setIsModalEditItemShown(false);
  }

  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [agent, setAgent] = useState('');
  let [fulltext, setFulltext] = useState('');
  let [tags, setTags] = useState([]);
  let [status, setStatus] = useState('');

  useEffect(() => {
    async function fetchData() {
      //------- Fetch --------
      const taskJson = await fetch(`${apiPath}/task/${editedItem}`);

      const taskJsonObj = await taskJson.json();
      setTitle(taskJsonObj.title);
      setDescription(taskJsonObj.description);
      setAgent(taskJsonObj.agent);
      setFulltext(taskJsonObj.fulltext);
      setTags(taskJsonObj.tags);
      setStatus(taskJsonObj.status);
    }
    if (isModalEditItemShown && editedItem) {
      fetchData();
    }
  }, []);

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
    const { value } = e.target;
    setStatus(value);
  }

  function fSubmitForm() {
    let editData = {
      agent,
      title,
      description,
      fulltext,
      status,
      tags
    };

    axios
      .put(`${apiPath}/edittask/${editedItem}`, editData)
      .then(function(response) {
        setIsModalEditItemShown(false);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        window.location.reload();
      });
  }

  return (
    <div
      className={classnames('modal', 'fade', 'bd-example-modal-lg', {
        show: isModalEditItemShown
      })}
      id="editItemModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {strings[lang].editTask}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hideModalEditItem}
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
                    placeholder="Title"
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
                    placeholder="Description"
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
                    <option value="Sam" selected={agent === 'Sam'}>
                      Sam
                    </option>
                    <option value="Kate" selected={agent === 'Kate'}>
                      Kate
                    </option>
                    <option value="Helga" selected={agent === 'Helga'}>
                      Helga
                    </option>
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
                          id="editcontentCheck"
                          name="content"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="editcontentCheck"
                        >
                          content
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="editsmmCheck"
                          name="smm"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="editsmmCheck"
                        >
                          smm
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="editdesignCheck"
                          name="design"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="editdesignCheck"
                        >
                          design
                        </label>
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="editdevCheck"
                          name="dev"
                          onChange={fChangeTags}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="editdevCheck"
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
                          id="edittodo"
                          value="todo"
                          name="customRadio"
                          className="custom-control-input"
                          onChange={fChangeStatus}
                          checked={status === 'todo'}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="edittodo"
                        >
                          {strings[lang].toDo}
                        </label>
                      </div>

                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="editinwork"
                          value="inwork"
                          name="customRadio"
                          className="custom-control-input"
                          onChange={fChangeStatus}
                          checked={status === 'inwork'}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="editinwork"
                        >
                          {strings[lang].inWork}
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="editdone"
                          name="customRadio"
                          value="done"
                          className="custom-control-input"
                          onChange={fChangeStatus}
                          checked={status === 'done'}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="editdone"
                        >
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
              onClick={hideModalEditItem}
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

export default ModalEditItem;
