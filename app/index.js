import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import configureStore from './stores/configureStore';
import getHistory from './stores/getHistory';

// Import styles
import './style/main.scss';

// Components
import ContactList from './containers/contactList';
import ContactView from './containers/contactView';

let rootElement = document.getElementById('root');
let store = configureStore();
let history = getHistory(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ContactList}></Route>
      <Route path="/contact/:id" component={ContactView}></Route>
    </Router>
  </Provider>,
  rootElement
);
