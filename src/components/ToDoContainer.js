import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

// context

import { appContext } from '../store/store.js';

// actions
import { ADD_TODO } from '../store/actions.js';

// components

import ToDo from './ToDo.js';

const ToDoContainer = ({ todo, listID }) => {
  // Get the values we need from the Context with useContext()
  const { lists, dispatch } = useContext(appContext);

  // Control the input to always have the input value in state (onChange, value)

  const [taskText, setTaskText] = useState('');
  //const [tasks, setTasks] = useState([]);

  const handleChange = (evt) => setTaskText(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Dispatch the new todo to the store

    //setTasks([...tasks, { id: uuid(), text: taskText, done: false }]);
    dispatch({
      type: ADD_TODO,
      payload: { taskText: taskText, listID: listID },
    });
    setTaskText('');
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
          value={taskText}
          required
        />
        <button className="btn" type="submit">
          Add task
        </button>
      </form>
      <div className="tasks">
        <h3>Things To Do:</h3>
        <ul className="ul">
          {lists?.map((list) => {
            if (list.id === listID) {
              return list.tasks.map((task) => (
                <li className="task" key={task.id}>
                  {task.taskText}
                </li>
              ));
            }
          })}
        </ul>

        {/* Take the items array, and map Todo items based on it, passing the individual item data down to the component */}
        {/* {todoItems.map((item, index) => (
          <ToDo key={index} data={item} />
        ))} */}
      </div>
    </div>
  );
};

export default ToDoContainer;
