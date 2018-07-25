const express = require('express');

const routes = express.Router();

// const authController = require('./controllers/authController');

// const indexController = require('./controllers/indexController');
const gameController = require('./controllers/gameController');
// const auth = require('../config/auth').auth;
// const authAction = require('../config/auth');
console.clear();
// routes.post('/login', indexController.login);

// routes.get('/', /* auth.authenticate, */ indexController.index);

// games
routes.get('/games/search/:query', gameController.search);


routes.use((req, res) => res.send(res.json('Route not found')));

routes.use((err, req, res, _next) => {
  res.status(err.status || 500);

  return res.send(err.message);
});

module.exports = routes;
