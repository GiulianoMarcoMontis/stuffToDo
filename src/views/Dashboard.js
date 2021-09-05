import { useState, useContext } from 'react';

// context
import { appContext } from '../store/store';

// actions
import { ADD_LIST } from '../store/actions';

// components
import List from '../components/List.js';

const Dashboard = () => {
  const { appState, dispatch } = useContext(appContext);

  // state for controlled form
  const [listTitle, setListTitle] = useState('');
  const handleChange = (evt) => setListTitle(evt.target.value);

  // submit handler to dispatch listTitle to the store to be added
  const handleSubmit = (evt) => {
    evt.preventDefault();
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

      {/* Render all lists added by the user. 
          Pass the list to the list component to render details  */}

      <div className="Dashboard_lists">
        {appState.map((list) => (
          <List key={list.listID} {...list} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
