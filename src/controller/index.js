module.exports = function (dependencies) {
  const express = dependencies.express;
  const app = dependencies.app;
  const router = express.Router();

  const home = require('./HomePageController.js')(router); // todo array
  const test = require('./TestPageController.js')(router);

  app.use(home); // todo cycle
  app.use(test);
};
