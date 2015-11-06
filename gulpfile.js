
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserify = require('browserify');
var exorcist = require('exorcist');
var gutil = require('gulp-util');

gulp.task('js', function () {

    return gulp.src('src/**/*.js', {base: 'src'})

        .pipe(plugins.map(function (file) {

            gutil.log(file.path);

            file.contents = browserify(file.path, {debug: true})
                .transform('babelify', {presets: ['es2015']})
                .bundle()
                .pipe(exorcist('dest/' + file.relative + '.map'));

            return file;

        }))

        .pipe(gulp.dest('dest'));

});
