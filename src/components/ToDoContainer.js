import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

// context

import { appContext } from '../store/store.js';

// actions

// components

import ToDo from './ToDo.js';

const ToDoContainer = ({ todo }) => {
  // Get the values we need from the Context with useContext()
  //const { todoItems, dispatch } = useContext(appContext);

  // Control the input to always have the input value in state (onChange, value)

  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (evt) => setTaskText(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Dispatch the new todo to the store
    // dispatch({ type: ADD_TODO, payload: todoText });

    setTasks([...tasks, { id: uuid(), text: taskText, done: false }]);
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
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <div className="tasks">
        <h3 className="color_head">TO DO</h3>
        <ul className="ul">
          {tasks.map((task) => {
            console.log(task);
            return <li className="task">{task.text}</li>;
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
