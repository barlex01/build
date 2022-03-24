
import gulp from'gulp';

// const browserSync = require('browser-sync').create();

import webpHtml from'gulp-webp-html';
import pugs from 'gulp-pug' ;
import path from '../config/path.js' ;
import app from '../config/app.js'; 

const pug = () => {
    return gulp.src(path.pug.src)
   
     .pipe(pugs(app.pugs))

     .pipe(gulp.dest(path.pug.dest))
    //  .pipe(browserSync.stream())
}

export default pug;