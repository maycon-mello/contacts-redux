import React from 'react';
import { Link } from 'react-router';
import {
  Input,
  Button,
  Panel
} from 'react-bootstrap';

export default ({id, contact}) => {

  let city = <div>{contact.city} / {contact.state}</div>;

  return (
    <Panel>
      <Link to={`/contact/${contact._id}`}>{contact.name}</Link>
      {contact.city ? city : null}
    </Panel>
  );
}
