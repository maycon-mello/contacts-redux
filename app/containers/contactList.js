import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as ContactActions from '../actions/contacts';
import ListItem from '../components/listItem';
import Filter from '../components/filter';

class ContactList extends Component {

  componentDidMount() {
    this.props.actions.fetchContacts();
  }

  render() {
    const list = this.props.contactList.map(c => {
      return <ListItem key={c._id} contact={c}/>
    });

    // <button onClick={this.props.actions.loadMore.bind(this)}>Load more</button>
    return (
      <div>
        <Filter {...this.props} />
        {list}
      </div>
    );
  }

  loadMore() {
    this.props.loadMore();
  }
}

function mapStateToProps(state) {
  return {
    contactList: state.contacts.list || [],
    filter: state.contacts.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContactActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
