import fetch from 'isomorphic-fetch';

import { RECEIVE_CONTACT, SAVE_CONTACT } from '../constants/ActionTypes';
import { HOST } from '../constants/Config';


export function fetchContact(id) {

  return (dispatch, getState) => {
    let url = HOST + `/contacts/${id}`;

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then((json) => {
        dispatch(receiveContact(json))
      });
  };
}

export function saveContact(id) {

  return (dispatch, getState) => {
    let url = HOST + `/contacts/${id}`;

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then((json) => {
        dispatch(receiveContact(json))
      });
  };
}


export function receiveContact(contact) {
  return {
    type: RECEIVE_CONTACT,
    payload: {
      contact
    }
  }
}
