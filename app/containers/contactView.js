import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as ContactActions from '../actions/contacts';

class Container extends Component {

  componentDidMount() {
    let { id } = this.props.params;
    this.props.actions.fetchContact(id);
  }

  render() {
    const { contact } = this.props;

    if (!contact) {
      return <div>Carregando...</div>
    }
    // <ContactView contact={ contact }/>
    return (
      <div>
        {contact.name}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    contact: state.contacts.contact
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContactActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
