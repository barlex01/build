import  gulp from 'gulp';
import  fileInclude from 'gulp-file-include';
import  htmlmin from 'gulp-htmlmin';
import  size from 'gulp-size';
// const browserSync = require('browser-sync').create();

import  path from '../config/path.js';
import  app from '../config/app.js'

import replace from 'gulp-replace';



const html = () => {
    return gulp.src(path.html.src)
    
     .pipe(fileInclude())
     .pipe(replace(/@img\//g, 'img/'))

     .pipe(size({title: 'до сжатия'}))
     .pipe(htmlmin(app.htmlmin))
     .pipe(size({title: 'после сжатия'}))
     .pipe(gulp.dest(path.html.dest))
    //  .pipe(browserSync.stream())
}

export default html;


