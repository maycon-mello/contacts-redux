import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

// Actions
import * as Actions from '../actions/contacts';

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

    return (
      <div> {contact.name} </div>
    );
  }

}

Container.path = '/contact/:id'

const mapStateToProps = state => ({
  contact: state.contacts.contact
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
