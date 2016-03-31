import React from 'react';
import model from '../model/ContactListModel';
import {
  Input,
  Button,
} from 'react-bootstrap';
import ListRow from './ListRow';

const FilterType = [
  {
    value: 'name',
    title: 'Nome',
  },
  {
    value: 'city',
    title: 'Cidade',
  },
  {
    value: 'state',
    title: 'Estado',
  },
  {
    value: 'company',
    title: 'Empresa',
  }
];

class SearchBar extends React.Component {

  constructor() {
    super();

  }

  render() {
    let filters = FilterType.map((f) => <option value={f.value}>{f.title}</option>);

    return (
      <div>
        <Input ref="filterType" type="select" label="Pesquisar por" placeholder="Pesquisar por">
          {filters}
        </Input>
        <Input ref="filterValue" type="text" placeholder="Digite para pesquisar" />
        <Button onClick={this.filterHandler.bind(this)} className="btn btn-block btn-primary">Filtrar</Button>
      </div>
    );

  }

  filterHandler() {
    let type = this.refs.filterType.getValue();
    let value = this.refs.filterValue.getValue();
    model.filter({ type, value });
  }

}

module.exports = SearchBar
