import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import configureStore from './stores/configureStore';
import getHistory from './stores/getHistory';

// Import styles
import './style/main.scss';

// Containers
import ContactList from './containers/contactList';
import ContactView from './containers/contactView';

let store = configureStore();
let history = getHistory(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={ContactList.path} component={ContactList} />
      <Route path={ContactView.path} component={ContactView} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
