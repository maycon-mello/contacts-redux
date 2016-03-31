import React from 'react';
import model from '../model/ContactListModel';
import {
  Input,
  Button,
} from 'react-bootstrap';
import ListRow from './ListRow';


class SearchBar extends React.Component {

  constructor() {
    super();

  }

  render() {

    return (
      <div>
        <Input type="select" label="Pesquisar por" placeholder="Pesquisar por">
          <option value="name">Nome</option>
        </Input>
        <Input type="text" placeholder="Digite para pesquisar" />
      </div>
    );

  }

}

module.exports = SearchBar
