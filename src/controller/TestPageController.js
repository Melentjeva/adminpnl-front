module.exports = function (router) {
  /**
   * @Route ("/test", method="GET")
   * @return Response
   */
  router.get('/test', function (request, response) {
    response.send({test: 'test hello'});
  });

  return router;
}
