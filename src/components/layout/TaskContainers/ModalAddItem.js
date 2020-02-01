import React, { useContext } from 'react';

import ToDoContainer from './ToDoContainer';
import InWorkContainer from './InWorkContainer';
import DoneContainer from './DoneContainer';
import Context from '../../../globalstore/context';
import Filters from './Filters';
import { strings } from '../../../config';
import classnames from 'classnames';

const ModalAddItem = () => {
  const { lang, isModalAddItemShown, setIsModalAddItemShown } = useContext(
    Context
  );

  function hideMidalAddItem() {
    setIsModalAddItemShown(false);
  }

  return (
    <div
      class={classnames('modal', 'fade', {
        show: isModalAddItemShown
      })}
      id="addItemModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Item
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hideMidalAddItem}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={hideMidalAddItem}
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddItem;
