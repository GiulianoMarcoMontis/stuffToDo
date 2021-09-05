import { useContext } from 'react';

// context
import { appContext } from '../store/store';

// actions
import { EDIT_TASK, REMOVE_TASK } from '../store/actions.js';

const Task = ({ listID, taskID, taskTitle, done }) => {
  const { dispatch } = useContext(appContext);

  // const handleEditTask = () => {
  //   dispatch({ type: EDIT_TASK, payload: { listID: listID, taskID: taskID } });
  // };

  return (
    <div className="Task">
      <p>{taskTitle}</p>

      <div className="actions">
        {/* <button
          className="btn"
          onClick={() =>
            dispatch({
              type: EDIT_TASK,
              payload: { listID: listID, taskID: taskID },
            })
          }
        >
          {!done ? 'ToDo' : 'Done'}
        </button> */}

        <button
          className="btn_close"
          onClick={() =>
            dispatch({
              type: REMOVE_TASK,
              payload: { listID: listID, taskID: taskID },
            })
          }
        >
          <img
            src="https://img.icons8.com/clouds/100/000000/delete.png"
            alt="Delete task"
          />
        </button>
      </div>
    </div>
  );
};

export default Task;
