var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp');

function watchAndRebuild() {
	gulp.watch(['./compile/**/*'], ['build']);
}

function watchAndRecompile() {
	gulp.watch('./style/**/*', ['less']);
}

gulp.task('watch-all', function () {
	watchAndRecompile();
	watchAndRebuild();
});

gulp.task('watch-compile-build', runSequence('compile', 'build', 'watch-all'));

gulp.task('watch-compile', ['build'], watchAndRecompile);
gulp.task('watch-build', ['build'], watchAndRebuild);

gulp.task('default', ['watch-compile-build']);
