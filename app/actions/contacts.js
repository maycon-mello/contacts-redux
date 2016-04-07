import fetch from 'isomorphic-fetch';

export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
export const LOAD_MORE = 'LOAD_MORE';
export const ADD_PAGE = 'ADD_PAGE';

export function fetchContacts() {

  return (dispatch, getState) => {
    let state = getState();
    let url = 'http://localhost:6060/contacts?page=' + state.contacts.page;
    console.log("fetching contacts");
    console.log("page " + state.contacts.page)
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
    dispatch(addPage())
    return dispatch(fetchContacts())
  };
}

export function addPage() {
  return {
    type: ADD_PAGE,
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
