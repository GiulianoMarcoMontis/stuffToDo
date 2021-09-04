import { useState, useContext } from 'react';
import { REMOVE_LIST } from '../store/actions.js';

// context

import { appContext } from '../store/store.js';

import DoneContainer from './DoneContainer.js';
import ToDoContainer from './ToDoContainer.js';

const List = ({ id, listTitle }) => {
  const { lists, dispatch } = useContext(appContext);

  // filter todo & done

  const todoItems = lists?.tasks?.filter((item) => !item.done);
  const doneItems = lists?.tasks?.filter((item) => item.done);

  const handleDeleteList = () => {
    dispatch({ type: REMOVE_LIST, payload: id });
  };

  //() => dispatch({ type: REMOVE_LIST, payload: id })

  return (
    <div className="List">
      <div className="List_head">
        <h1>{listTitle}</h1>
        <button className="btn_close" onClick={handleDeleteList}>
          <span>X</span>
        </button>
      </div>
      <div className="List_body">
        <ToDoContainer todo={todoItems} listID={id} />
        {/* <DoneContainer done={doneItems} /> */}
      </div>
    </div>
  );
};

export default List;
