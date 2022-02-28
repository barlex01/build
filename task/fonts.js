
import  gulp from 'gulp';

// const browserSync = require('browser-sync').create();

import  fonter from 'gulp-fonter';
import  newer from 'gulp-newer';
import  ttf2woff2 from 'gulp-ttf2woff2';
import  path from '../config/path.js';
import  app from '../config/app.js'


const fonts = () => {
    return gulp.src(path.fonts.src)
    
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(app.fonter))
    .pipe(gulp.dest(path.fonts.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.fonts.dest))
    
}

export default fonts;