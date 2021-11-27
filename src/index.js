import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('root')
);


