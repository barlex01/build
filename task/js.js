
import gulp from 'gulp';

// const browserSync = require('browser-sync').create();

import babel from 'gulp-babel';
import webpack from 'webpack-stream'


import path from '../config/path.js';
import app from '../config/app.js'


const js = () => {
    return gulp.src(path.js.src, {sourcemaps:app.isDev})
    
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(gulp.dest(path.js.dest, {sourcemaps:app.isDev}))
    
}

export default js;