import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss'
import {AppProvider} from './context/context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
