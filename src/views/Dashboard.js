import { useState, useContext } from 'react';

// context

import { appContext } from '../store/store.js';

// actions
import { ADD_LIST, REMOVE_LIST } from '../store/actions.js';

// components
import List from '../components/List.js';

const Dashboard = () => {
  // Get the values we need from the Context with useContext()
  const { lists, dispatch } = useContext(appContext);

  const [listTitle, setListTitle] = useState('');

  const handleChange = (evt) => setListTitle(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Dispatch the new todo to the store
    dispatch({ type: ADD_LIST, payload: listTitle });
    setListTitle('');
  };

  return (
    <div className="Dashboard">
      <div className="Dashboard_head">
        <h1>Dashboard</h1>
        <h2>Add a list</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="list" className="label"></label>
          <input
            className="input"
            type="text"
            id="list"
            name="list"
            onChange={handleChange}
            value={listTitle}
            required
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
        <hr />
      </div>

      <div className="Dashboard_lists">
        {lists.map((list) => {
          console.log(list);
          return <List key={list.id} {...list} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
