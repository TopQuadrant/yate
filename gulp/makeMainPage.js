var gulp = require("gulp"),
  browserify = require("browserify"),
  jsValidate = require("gulp-jsvalidate"),
  source = require("vinyl-source-stream"),
  embedlr = require("gulp-embedlr"),
  minifyCSS = require("gulp-cssnano");
uglify = require("gulp-uglify"), sass = require("gulp-sass")(require("sass")), buffer = require("vinyl-buffer"), concat = require(
  "gulp-concat"
);

gulp.task("makeMainPageJs", async function() {
  return gulp.src("./doc/*.js").pipe(jsValidate()).on("finish", function() {
    browserify({ entries: ["./doc/main.js"], debug: true })
      .bundle()
      .pipe(source("doc.min.js"))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest("doc"));
  });
});
gulp.task("makeMainPageCss", async function() {
  return gulp
    .src(["./doc/main.scss"])
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat("doc.min.css"))
    .pipe(gulp.dest("doc"));
});

gulp.task("makeMainPage",  gulp.series("makeMainPageJs", "makeMainPageCss"));
