module.exports = function (express, app) {
  /**
   * @constructor Config
   * @returns Object
   */
  function Config () {
    this.dependencies = {
      express: express,
      app: app
    }
  }

  return new Config();
};
