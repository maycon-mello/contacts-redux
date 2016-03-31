import React from 'react';
import model from '../model/ContactListModel';
import {
  Input,
  Button,
} from 'react-bootstrap';
import ListRow from './ListRow';
import SearchBar from './SearchBar';


class ContactList extends React.Component {

  constructor() {
    super();
    this.state = model.getState();
    console.log(model.state);
  }

  componentDidMount() {
    let _this = this;
    this.unsubscribe = model.subscribe(this.setState.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    let rows;
    if (this.state.isFetching) {
      rows = <tr><td>Carregando</td></tr>
    } else {
      rows = this.state.list.map((contact) => <ListRow id={contact._id} contact={contact} />);
    }

    return (
      <div>
        <SearchBar />
        <table>{rows}</table>
        <button onClick={model.loadMore}>carregar mais</button>
      </div>
    );
  }


}

module.exports = ContactList
