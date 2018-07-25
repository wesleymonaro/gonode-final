// const login = require('../../config/auth').login;
const translate = require('google-translate-api');
const { igdbApi } = require('../services/api');

const { Game } = require('../models');

module.exports = {
  async search(req, res, _next) {
    try {
      const { query } = req.params;

      const { data: games } = await igdbApi.get(`/games/?search=${query}&fields=*`);

      res.json(games);
    } catch (error) {
      // res.status(500);
      console.log(error);
      res.send(error.response);
    }
  },
};
