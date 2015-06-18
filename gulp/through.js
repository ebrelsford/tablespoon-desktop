var gulp = require('gulp');

gulp.task('through', function () {
	return gulp.src([
        'index.html',
        'style/base.css',
        'templates/**/*',
        '*.js'
    ], { base: '.' })
		.pipe(gulp.dest('./compile'));
});
