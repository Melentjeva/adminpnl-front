module.exports = function (router) {
  /**
   * @Route ("/test", method="GET")
   * @return Response
   */
  router.get('/test', function (request, response) {
    response.render('layouts/TestPage/index.njk', {test: 'test hello'});
  });

  return router;
};
