// using an ES6 transpiler, like babel
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import ContactList from './components/ContactList';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={ContactList}></Route>
</Router>);

ReactDOM.render(router, document.getElementById('root'));
