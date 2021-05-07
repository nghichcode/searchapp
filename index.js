const express = require('express');
const {search_pages, search_sites, search_all} = require('./app/search.js');
const {users} = require('./app/users.js');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!')
});
app.get('/search/pages/', search_pages);
app.get('/search/sites/', search_sites);
app.get('/search/all/', search_all);
app.get('/users/', users);

app.use('', express.static('frontend'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
