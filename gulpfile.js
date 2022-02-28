
// подключаемые плагины
import  gulp from 'gulp';
import  browserSync from 'browser-sync';
import  app from'./config/app.js';

//конфигурация 
import  path from './config/path.js'

//подключаемые задачи
import  clear from'./task/clear.js';
import  html from'./task/html.js';
import  scss from'./task/scss.js';
import  js from'./task/js.js';
import  img from'./task/img.js';
import  fonts from'./task/fonts.js';


const server = () => {
    browserSync.init({
        server:{
            baseDir: path.root
        }
    })
}


const watcher = () => {
    
    gulp.watch(path.html.watch, html).on('all', browserSync.reload)
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);
    gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
}


const build = gulp.series(
    clear,
    gulp.parallel(/*pug,*/html, scss, js, img, fonts),
   
)

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)

);


export {clear}; 
export {fonts}; 
export {html}; 
export {scss}; 
export {js}; 
export {img};



//сборка
export default app.isProd
    ? build
    : dev;



