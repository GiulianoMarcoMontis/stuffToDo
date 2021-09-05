import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// provider
import { AppProvider } from './store/store';

// components
import App from './App';

// styling - sass
import './main.scss';

// the Provider passes state and dispatches to all components
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
