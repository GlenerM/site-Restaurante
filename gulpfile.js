const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function compilar (){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'))
}

function imagensCompiladas (){
    return gulp.src ('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}


exports.sass = compilar
exports.images = imagensCompiladas
exports.watch = function(){
    gulp.watch('./src/styles/*.scss' , {ignoreInitial:false}, gulp.series(compilar))
}