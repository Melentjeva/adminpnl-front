import paths from './paths.js';
import Watcher from './watcher.js';

const { gulp, src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const concat = require('gulp-concat');

(function () {
  function Builder () {

    function scssCompile () { // todo params
      return src(paths.src.homePage.scss, { allowEmpty: true })
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('main.css'))
            .pipe(dest(paths.dist.homePage.css))
    }

    function def () {
      return console.log ('gulp ready, look packaje.json for scripts');
    }

    function cleanDist () {
      return del('dist', { allowEmpty: true })
    }

    this.def = function () {
      def();
    }

    this.scssCompile = function () {
      scssCompile();
    }

    this.cleanDist = function () {
      cleanDist();
    }

    this.watchFiles = function () {
      Watcher.watch(watch, {
        def: def,
        scssCompile: scssCompile
      });
    }
  }

  module.exports = new Builder();
})();
