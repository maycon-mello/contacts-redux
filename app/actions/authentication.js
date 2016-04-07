export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function getAuth() {
  let authentication = JSON.parse(localStorage.getItem('authentication')) || { apiToken: '', uuId: '' };

  return {
    type: LOGIN,
    payload: {
      authentication
    }
  };
}

export function login(uuId, apiToken) {
  return {
    type: LOGIN,
    payload: {
      authentication: {
        uuId,
        apiToken
      }
    }
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: {
      tasks: [],
      authentication: {
        uuId: '',
        apiToken: ''
      }
    }
  };
}
