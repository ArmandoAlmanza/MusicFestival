const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp');

const paths = {
    images: './assets/img',
    scss: './assets/sass/**/*.scss'
}

function css() {
    return src(paths.scss)
    .pipe( sass({
        outputStyle: 'compressed',
    }).on('error', sass.logError) )
    .pipe( dest('./build/css'))
}

function watchFiles(){
    watch(paths.scss, css);
}

function images (){
    return src(paths.images)
    .pipe( imagemin() )
    .pipe( dest('./build/img') )
}

function webPV() {
    return src(paths.images)
    .pipe( webp())
    .pipe( dest('./build/img'))
}

exports.default = series( css, images, webPV, watchFiles)