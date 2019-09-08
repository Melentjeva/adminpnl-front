(function () {
  function Watcher () {

    this.watch = function (watcher, methods) {
      watcher('index.html').on('change', methods.def);
      watcher('app/scss/**/*.scss').on('change', methods.buildCss);
    }
  }

  module.exports = new Watcher();
})();
