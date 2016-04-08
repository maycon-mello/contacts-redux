import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

// Actions
import * as Actions from '../actions/contacts';

// Components
import ListItem from '../components/listItem';
import Filter from '../components/filter';

class Container extends Component {

  componentDidMount() {
    this.props.actions.fetchContacts();
  }

  render() {
    const list = this.props.list.map(
      c => <ListItem key={c._id} contact={c}/>
    );

    return (
      <div>
        <Filter {...this.props} />
        {list}
      </div>
    );
  }

}

Container.path = '/';

const mapStateToProps = state => ({
  list: state.contacts.list || [],
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
