import fetch from 'isomorphic-fetch';

import { ADD_PAGE, RECEIVE_CONTACTS, SET_FILTER } from '../constants/ActionTypes';
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

export function receiveContacts(list) {
  return {
    type: RECEIVE_CONTACTS,
    payload: {
      list
    }
  }
}
