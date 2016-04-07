import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'

import {store, history} from './stores/createStore';
import ContactList from './components/contactList';

let rootElement = document.getElementById('root');

import style from './style/main.scss';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ContactList}></Route>
      <Route path="/contact/:contactId" component={ContactList}></Route>
    </Router>
  </Provider>,
  rootElement
);
