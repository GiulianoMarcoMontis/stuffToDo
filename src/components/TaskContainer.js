import { useState, useContext } from 'react';

// context
import { appContext } from '../store/store';

// actions
import { ADD_TASK } from '../store/actions';

// components
import Task from './Task.js';

const TaskContainer = ({ listID }) => {
  const { appState, dispatch } = useContext(appContext);

  // controlled form state and handler
  const [taskTitle, setTaskTitle] = useState('');
  const handleChange = (evt) => setTaskTitle(evt.target.value);

  // dispatch on submit to add tasks
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: ADD_TASK,
      payload: { taskTitle: taskTitle, listID: listID },
    });
    setTaskTitle('');
  };

  return (
    <div className="TaskContainer">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="tasks" className="label"></label>
        <input
          className="input"
          type="text"
          id="tasks"
          name="tasks"
          onChange={handleChange}
          value={taskTitle}
          required
        />
        <button className="btn" type="submit">
          Add task
        </button>
      </form>
      <div className="tasks">
        <h3>Things To Do:</h3>
        <ul className="ul">
          {appState?.map((list) => {
            if (list.listID === listID)
              return list.tasks?.map((task) => (
                <Task key={task.taskID} listID={listID} {...task} />
              ));
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskContainer;
