import { store } from '../index';

const requestInfo = (method, body) => {
  return {
    method: method,
    headers: new Headers({
      'Content-type': 'application/json',
      Authorization: store.getState().authentication.token,
    }),
    body: body,
  };
};

export const request = (url, method = 'GET', body = '') => {
  const promise = new Promise((resolve, reject) => {
    fetch(url, requestInfo(method, body))
      .then(response => resolve(response.json()))
      .catch(() => reject());
  });

  return promise;
};
