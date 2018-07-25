const axios = require('axios');
const { IGDB_API_USER_KEY } = require('../../config/consts');

const igdbApi = axios.create({
  baseURL: 'https://api-endpoint.igdb.com/',
  headers: {
    'user-key': IGDB_API_USER_KEY,
    'Accept': 'application/json',
  },
});

module.exports = { igdbApi };
