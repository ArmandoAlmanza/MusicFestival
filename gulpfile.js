const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const concat = require('gulp-concat');

const paths = {
   images: "./assets/img",
   scss: "./assets/sass/**/*.scss",
   js: './assets/js**/*.js'
};

function css() {
   return src(paths.scss)
      .pipe(
         sass({
            outputStyle: "compressed",
         }).on("error", sass.logError)
      )
      .pipe(dest("./build/css"));
}

function js(){
   return src( paths.js)
   .pipe( concat('index.js') )
   .pipe( dest('./build/js') )
}

function watchFiles() {
   watch(paths.scss, css);
   watch(paths.js, js)
}

function images() {
   return src(paths.images).pipe(imagemin()).pipe(dest("./build/img"));
}

function webPV() {
   return src(paths.images).pipe(webp()).pipe(dest("./build/img"));
}

exports.default = series(css, images, js,webPV, watchFiles);
