import React from 'react';
import store from '../storse/ContactStore';
import {
  Input,
  Button,
} from 'react-bootstrap';

class ContactList extends React.Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(this, () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let state = store.getState();
    return (
      <div>

      </div>
    );
  }


}

module.exports = ContactList
