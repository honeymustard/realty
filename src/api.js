export default class API {

  static fetchDatum() {
    return fetch('/api/datum/latest', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json());
  }
}