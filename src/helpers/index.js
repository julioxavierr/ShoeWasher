import { store } from '../index';

const requestInfo = (token = store.getState().authentication.token) => {
  return {
    method: 'GET',
    headers: new Headers({
      'Content-type': 'application/json',
      Authentication: token,
    }),
  };
};

export const request = url => {
  const promise = new Promise((resolve, reject) => {
    fetch(url, requestInfo())
      .then(response => resolve(response.json()))
      .catch(() => reject());
  });

  return promise;
};
