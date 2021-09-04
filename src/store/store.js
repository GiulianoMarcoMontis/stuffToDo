import { createContext, useReducer } from 'react';

import appReducer from './reducer.js';

// create context for the provider and export it for the children

export const appContext = createContext();

// create Provider and useReducer to be exported for init the provider in index.js

export const AppProvider = ({ children }) => {
  // useReducer to handle status and setters

  const [lists, dispatch] = useReducer(appReducer, []);

  // filter todo & done
  //const todoItems = tasks.filter((item) => !item.done);
  //const doneItems = tasks.filter((item) => item.done);

  // return the Provider based on appContext and values you need

  return (
    <appContext.Provider value={{ lists, dispatch }}>
      {children}
    </appContext.Provider>
  );
};
