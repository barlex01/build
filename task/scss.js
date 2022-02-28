
import gulp from'gulp';

// const browserSync = require('browser-sync').create();

import prefixer from 'gulp-autoprefixer';
import csso from'gulp-csso';
import rename from'gulp-rename';
import size from'gulp-size';
import shorthand from 'gulp-shorthand';
import mediaGroup from 'gulp-group-css-media-queries';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass)

import sassGlob from 'gulp-sass-glob';



import webpCss from 'gulp-webp-css';
import path from '../config/path.js';
import app from '../config/app.js'


const scss = () => {
    return gulp.src(path.scss.src, {sourcemaps:app.isDev})
    
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(prefixer())
    .pipe(shorthand())
    .pipe(mediaGroup())
    .pipe(size({title: 'main.css'}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps:app.isDev}))
    .pipe(rename({ suffix:'.min'}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps:app.isDev}))
    
}

export default scss;