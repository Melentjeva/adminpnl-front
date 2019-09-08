import Builder from './builder.js';

(function () {
  function Gulp () {

    this.def = async function () {
      await Builder.def();
    }

    this.watch = async function () {
      await Builder.watchFiles();
    }
  }

  module.exports = new Gulp();
})()
