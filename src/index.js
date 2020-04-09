import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './main/routes';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);