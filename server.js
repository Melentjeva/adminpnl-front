'use strict';

require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log ('we are on ' + port);
});
