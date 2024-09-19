const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("styles", function () {
  return gulp
    .src("src/css/*.css")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("serve", function () {
  browserSync.init({
    server: "./dist",
  });

  gulp.watch("src/css/*.css", gulp.series("styles"));
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  gulp.watch("src/*.html", gulp.series("html"));
});

gulp.task("default", gulp.series("html", "styles", "scripts", "serve"));
