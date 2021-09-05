import { createContext, useReducer, useEffect } from 'react';

// reducer
import appReducer from './reducer.js';

// actions
import { RESTORE_STATE } from './actions';

// create context for the provider and export it for the children
export const appContext = createContext();

// create Provider and useReducer to be exported for init the provider in index.js
export const AppProvider = ({ children }) => {
  // useReducer to handle status and setters
  const [appState, dispatch] = useReducer(appReducer, []);

  // effects to get and set local storage
  useEffect(() => {
    const storedAppState = localStorage.getItem('appState');
    if (storedAppState)
      dispatch({ type: RESTORE_STATE, payload: JSON.parse(storedAppState) });
  }, []);

  useEffect(
    () => localStorage.setItem('appState', JSON.stringify(appState)),
    [appState]
  );

  // return the Provider based on appContext and values you need
  return (
    <appContext.Provider value={{ appState, dispatch }}>
      {children}
    </appContext.Provider>
  );
};
