import React, { Component } from 'react';
import { Panel, Button, Input } from 'react-bootstrap';

import FilterOptions from '../constants/FilterOptions';

class ListItem extends Component {

  render() {

    let options = FilterOptions.map(
      f => <option value={f.value} key={f.value}>{ f.title }</option>
    );

    return (
      <Panel className="list-item">

        <Input ref="filterType"
               type="select"
               label="Pesquisar por"
               placeholder="Pesquisar por">{options}</Input>

        <Input ref="filterValue"
               type="text"
               placeholder="Digite para pesquisar"/>

        <Button onClick={this.clickHandler.bind(this)}
                className="btn btn-block btn-primary">Pesquisar</Button>
      </Panel>
    );
  }

  clickHandler() {
    const { search } = this.props.actions;
    let { filterType, filterValue } = this.refs;

    search({
      type: filterType.getValue(),
      value: filterValue.getValue(),
    })
  }
}

export default ListItem;
