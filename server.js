'use strict';

require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// ------------------
const config = require('./config/index.js')(express, app);
const controllers = require('./src/controller/index.js')(config.dependencies);
// ------------------

app.listen(port, function () {
  console.log ('we are on ' + port);
});
