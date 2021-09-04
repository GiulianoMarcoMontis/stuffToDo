import { useState, useContext } from 'react';
import { REMOVE_LIST } from '../store/actions.js';

// context

import { appContext } from '../store/store.js';

import DoneContainer from './DoneContainer.js';
import ToDoContainer from './ToDoContainer.js';

const List = ({ id, listTitle }) => {
  console.log(id, listTitle);
  const { lists, dispatch } = useContext(appContext);

  // filter todo & done

  const todoItems = lists?.tasks?.filter((item) => !item.done);
  const doneItems = lists?.tasks?.filter((item) => item.done);

  const handleDeleteList = () => {
    dispatch({ type: REMOVE_LIST, payload: id });
  };

  return (
    <div className="List">
      <button
        className="btn_close"
        onClick={() => dispatch({ type: REMOVE_LIST, payload: id })}
      >
        X
      </button>
      <div className="ListContainer_head">
        <h1 className="color_head">{listTitle}</h1>
        <h2 className="color_head">add tasks</h2>
      </div>
      <ToDoContainer todo={todoItems} />
      {/* <DoneContainer done={doneItems} /> */}
    </div>
  );
};

export default List;
