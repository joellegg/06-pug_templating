'use strict';

const express = require('express');
const app = express();

// three routes; `/`, `/about` and `/inventory`
app.use(express.static('public'));

app.set('view engine', 'pug');

const names = ["Larry", "Moe", "Curly", "Frank"];

// ROUTES
app.get('/', (req, res, next) => {
  // first object is name of the template, second is the object of data
  res.render('index', {subtitle: "This came from my JS data", names, loggedIn: false})
});
app.get('/article', (req, res, next) => {
  res.render('article', {subtitle: "This came from my JS data", names, loggedIn: true})
});


// PORT
const port = process.env.PORT || 3000
// this sets the port so we can get it later, may or may not be necessary
app.set('port', port);

app.listen(port, () => {console.log(`listening on port ${port}`)})
