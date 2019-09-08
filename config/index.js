module.exports = function (express, app) {
  function Config () {
    this.dependencies = {
      express: express,
      app: app
    }
  }

  return new Config();
};
