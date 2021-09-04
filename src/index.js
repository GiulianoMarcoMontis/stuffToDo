import React from 'react';
import ReactDOM from 'react-dom';

import { AppProvider } from './store/store.js';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './main.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
