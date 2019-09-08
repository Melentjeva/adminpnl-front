'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const nunjucks = require('nunjucks');

app.listen(port, function () {
  console.log ('we are on ' + port);
});
