module.exports = function (router) {
  /**
   * @Route ("/", method="GET")
   * @return String
   */
  router.get('/', function (request, response) {
    response.render('layouts/HomePage/index.njk');
  });

  return router;
}
