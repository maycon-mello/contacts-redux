import React from 'react';
import createStore from './stores/createStore';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ContactList from './components/contactList';
import RootReducer from './reducers/rootReducer';

let store = createStore(RootReducer);

let rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <ContactList />
  </Provider>,
  rootElement
);
