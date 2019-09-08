(function () {
  function Watcher () {
    /**
      * @method watch
      * @param watcher {Object}
      * @param methods {Object}
      * @return void
      */
    this.watch = function (watcher, methods) { // todo build function on change
      watcher('index.html').on('change', methods.def);
      watcher('app/components/**/*.scss').on('change', methods.scssCompile);
    }
  }

  module.exports = new Watcher();
})();
