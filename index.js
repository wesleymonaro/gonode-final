const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
// const flash = require('connect-flash');
// const methodOverride = require('method-override');
const routes = require('./app/routes');
const auth = require('./config/auth').auth;

const sessionConfig = require('./config/session');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(auth.initialize());
app.use(bodyParser.json());
app.use(session(sessionConfig));

app.use('/', routes);

app.listen(3000);
