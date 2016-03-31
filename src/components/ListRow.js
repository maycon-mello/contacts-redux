import React from 'react';
import { Link } from 'react-router';

export default ({id, contact}) => {
  return (
    <div>
      <Link to={`/contact/${contact._id}`}>{contact.name}</Link>
    </div>
  );
}
