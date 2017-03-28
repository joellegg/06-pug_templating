'use strict';
const data = require('./public/data/inventory.json');
console.log('data', data.inventory);
const inventory = data.inventory

const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

// ROUTES
// three routes; `/`, `/about` and `/inventory`
app.get('/', (req, res, next) => {
  // first object is name of the template, second is the object of data
  res.render('index', {currentPage: '/'})
});
app.get('/about', (req, res, next) => {
  res.render('about', {currentPage: '/about'})
});
app.get('/inventory', (req, res, next) => {
  res.render('inventory', {currentPage: '/inventory', inventory})
})


// PORT
const port = process.env.PORT || 3000
// this sets the port so we can get it later, may or may not be necessary
app.set('port', port);

app.listen(port, () => {console.log(`listening on port ${port}`)})
