module.exports = function (router) {
  /**
   * @Route ("/", method="GET")
   * @return String
   */
  router.get('/', function (request, response) {
    response.send('hello');
  });

  return router;
}
