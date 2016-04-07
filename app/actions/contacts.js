import fetch from 'isomorphic-fetch';

export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
export const LOAD_MORE = 'LOAD_MORE';
export const ADD_PAGE = 'ADD_PAGE';

// {
//   headers: {
//     'X-API-USER': 'test',
//     'X-API-Key': 'test'
//   }
// }

export function fetchContacts() {

  return (dispatch, getState) => {
    let state = getState();
    let url = 'http://localhost:6060/contacts?page=' + state.page;
    console.log("fetching contacts");
    console.log("page " + state.page)
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

export function receiveContacts(contactList) {
  return {
    type: RECEIVE_CONTACTS,
    payload: {
      contactList
    }
  }
}
