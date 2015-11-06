
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserify = require('browserify');
var gutil = require('gulp-util');

gulp.task('js', function () {

    return gulp.src('src/**/*.js')
        .pipe(plugins.map(function (file) {
            gutil.log(file.path);
            file.contents = browserify(file.path).transform('babelify', {presets: ['es2015']}).bundle();
            return file;
        }))
        .pipe(gulp.dest('dest'));

});
