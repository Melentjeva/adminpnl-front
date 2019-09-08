import Builder from './builder.js';

(function () {
  function Gulp () {
    this.def = async function () {
      await Builder.def();
    }

    this.build = async function () {
      await Builder.build();
    }

    this.watch = async function () {
      await Builder.watchFiles();
    }
  }

  module.exports = new Gulp();
})();
