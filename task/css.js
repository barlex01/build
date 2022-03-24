
const {src, dest } = require('gulp');

// const browserSync = require('browser-sync').create();

import concat from'gulp-concat';
import cssImport from'gulp-cssimport';
import prefixer from'gulp-autoprefixer';
import csso from'gulp-csso';
import rename from'gulp-rename';
import size from'gulp-size';

import mediaGroup from'gulp-group-css-media-queries';


import path from '../config/path.js';
import app from '../config/app.js';


const css = () => {
    return src(path.css.src, {sourcemaps:app.isDev})
    .pipe(concat('main.css'))
    .pipe(cssImport())

    .pipe(prefixer())

    .pipe(mediaGroup())
    .pipe(size({title: 'main.css'}))
    .pipe(dest(path.css.dest, {sourcemaps:app.isDev}))
    .pipe(rename({ suffix:'.min'}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(dest(path.css.dest, {sourcemaps:app.isDev}))
    
}

export default css;