let express = require('express');
let moment = require('moment');
let fetch = require('node-fetch');
let path = require('path');
let secrets = require('./secrets');

let app = express();
let host = secrets.host;
let port = secrets.port;

let getToken = user => {
  return fetch(`${host}/api/auth/token`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(res => res.token);
}

let getRoute = (route, token) => {
  return fetch(route, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  })
  .then(res => res.json());
}

app.get('/api/datum/latest', (req, res) => {
  let tenDaysAgo = moment().subtract(10, 'days').format('YYYY-MM-DD');
  getToken(secrets.user)
    .then(token => getRoute(`${host}/api/realty/datum?from=${tenDaysAgo}`, token))
    .then(datum => res.send(datum))
    .catch(e => console.log(e));
});

app.use('/', express.static(path.join(__dirname, 'dist')));

// Pass all requests to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Realty: listing on ${port}`));