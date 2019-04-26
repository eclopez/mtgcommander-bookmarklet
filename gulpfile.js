const gulp = require("gulp");
const del = require("del");
const pug = require("gulp-pug");
const sass = require("gulp-sass");


const paths = {
  pug: {
    src: "src/pug/**/*.pug",
    dest: "docs"
  },
  sass: {
    src: "src/sass",
    dest: "docs/css"
  }
}

const clean = () => {
  return (del([ "docs" ]));
}

const compile_pug = () => {
  return gulp.src(paths.pug.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.pug.dest));
}

const compile_sass = () => {
  return gulp.src(paths.sass.src + "/mtgc.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.sass.dest));
}

const build = gulp.series(clean, gulp.parallel(compile_pug, compile_sass));
gulp.task("default", build);
