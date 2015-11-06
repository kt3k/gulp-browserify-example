
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserify = require('browserify');
var exorcist = require('exorcist');
var gutil = require('gulp-util');

gulp.task('js', function () {

    return gulp.src('src/**/*.js', {base: 'src'})

        // transform vinyl objects using gulp-map plugin
        .pipe(plugins.map(function (file) {

            gutil.log(file.path);

            // replace file contents with browserify's bundle stream
            file.contents = browserify(file.path, {debug: true})
                .transform('babelify', {presets: ['es2015']})
                .bundle()
                // externalize the sourcemap
                .pipe(exorcist('dest/' + file.relative + '.map'));

            return file;

        }))

        .pipe(gulp.dest('dest'));

});
