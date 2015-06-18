var gulp = require('gulp');
var electron = require('gulp-electron');

var packageJson = require('../package.json');

gulp.task('electron', function () {
    return gulp.src('')
        .pipe(electron({
            cache: './cache',
            packageJson: packageJson,
            platforms: ['darwin-x64', 'linux-x64'],
            release: './build',
            src: './compile',
            version: 'v0.26.1'
        }))
        .pipe(gulp.dest(''));
});
