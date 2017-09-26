const BASE_URL = 'https://jsonplaceholder.typicode.com';

function toEndpoint(url) {
  return `${BASE_URL}${url}`;
}

export function get(url) {
  return fetch(toEndpoint(url)).then(response => response.json());
}

export function post(url, data) {
  return fetch(toEndpoint(url), { method: 'POST', data }).then(response =>
    response.json(),
  );
}
