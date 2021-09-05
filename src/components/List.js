import { useContext } from 'react';

// context
import { appContext } from '../store/store';

// actions
import { REMOVE_LIST } from '../store/actions';

// components
import TaskContainer from './TaskContainer.js';

const List = ({ listID, listTitle, tasks }) => {
  const { dispatch } = useContext(appContext);

  // dispatch sends the listID to the reducer to delete the list
  const handleDeleteList = () => {
    dispatch({ type: REMOVE_LIST, payload: listID });
  };

  return (
    <div className="List">
      <div className="List_head">
        <h1>{listTitle}</h1>
        <button className="btn_close" onClick={handleDeleteList}>
          <img
            src="https://img.icons8.com/clouds/100/000000/delete.png"
            alt="Delete task"
          />
        </button>
      </div>
      <div className="List_body">
        <TaskContainer listID={listID} />
      </div>
    </div>
  );
};

export default List;
