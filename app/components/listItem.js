import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router';

function ListItem({contact}) {
  // Empty items
  if (contact.name.length === 0) {
    return <div></div>
  }

  return (
    <Panel className="list-item">
      <Link to={`/contact/${contact._id}`}>
        <h2>{contact.name.toLowerCase()}</h2>
        <span className="list-item-state">{contact.state}</span>
        <div className="list-item-city">{contact.city.toLowerCase()}</div>
      </Link>
    </Panel>
  );
}

export default ListItem;
