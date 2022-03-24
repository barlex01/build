
import gulp from'gulp';

// const browserSync = require('browser-sync').create();

import prefixer from 'gulp-autoprefixer';
import csso from'gulp-csso';
import rename from'gulp-rename';
import size from'gulp-size';

import mediaGroup from 'gulp-group-css-media-queries';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass)

import sassGlob from 'gulp-sass-glob';




import path from '../config/path.js';
import app from '../config/app.js'
import replace from 'gulp-replace';


const scss = () => {
    return gulp.src(path.scss.src, {sourcemaps:app.isDev})
    
    .pipe(sassGlob())
   
    .pipe(sass())

    .pipe(prefixer())
 
    .pipe(mediaGroup())
    .pipe(replace(/@img\//g,'../img/'))
    .pipe(size({title: 'main.css'}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps:app.isDev}))
    .pipe(rename({ suffix:'.min'}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps:app.isDev}))
    
}

export default scss;