import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Team from './pages/Team';
import Product from './pages/Product';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/team' component={Team} />
    <Route exact path='/product/:id' component={Product} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
