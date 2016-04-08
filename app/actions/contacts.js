import fetch from 'isomorphic-fetch';

import { ADD_PAGE, RECEIVE_CONTACTS, SET_FILTER, RECEIVE_CONTACT } from '../constants/ActionTypes';
import { HOST } from '../constants/Config';

export function fetchContacts() {

  return (dispatch, getState) => {
    let { page, filter } = getState().contacts;
    let url = HOST +
    `/contacts?page=${page}`+
    `&filterType=${filter.type}&filterValue=${filter.value}`;

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then((json) => {
        dispatch(receiveContacts(json))
      });
  };
}

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

export function loadMore() {
  return dispatch => {
    dispatch({
      type: ADD_PAGE,
    })
    return dispatch(fetchContacts())
  };
}

export function search(filter) {
  return dispatch => {
    dispatch({
      type: SET_FILTER,
      filter,
    })
    return dispatch(fetchContacts())
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

export function receiveContacts(list) {
  return {
    type: RECEIVE_CONTACTS,
    payload: {
      list
    }
  }
}
