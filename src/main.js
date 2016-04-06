import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import ContactList from './components/ContactList';
import ContactView from './components/ContactView';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={ContactList}></Route>
    <Route path="/contact/:contactId" component={ContactView}></Route>
</Router>);



ReactDOM.render(router, document.getElementById('root'));
