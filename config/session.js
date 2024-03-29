const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('../app/models');

module.exports = {
  secret: 'Vj>L+;|*qB[(AfqRV@^ZM~K)x%iL.)32',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
