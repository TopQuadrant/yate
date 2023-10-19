require("require-dir")("./gulp");

var gulp = require("gulp");
gulp.task("default", gulp.series("browserify", "browserifyWithDeps", "makeCss", "makeMainPage"));
gulp.task("serve",  gulp.parallel("makeCss", "makeMainPage", "browserifyForDebug", "watch", "connect"));
gulp.task("pack", gulp.series("browserify"));
gulp.task("pack2", gulp.series("browserifyWithDeps"));