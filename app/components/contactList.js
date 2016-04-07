import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/contacts';


class ContactList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {

    const list = this.props.contactList.map(c => {
      return <div key={c._id}>{c.name}</div>
    });
    console.log(this);
    return (
      <div>
        {list}
        <button onClick={this.loadMore.bind(this)}>Load more</button>
      </div>
    );
  }

  loadMore() {
    const { loadMore, fetchContacts } = this.props;
    loadMore();
    console.log(this);
    console.log(loadMore);
  }
}

function select(state) {
  console.log(state);
  return {
    contactList: state.contacts.list || []
  };
}

export default connect(select, actions)(ContactList);
