
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserify = require('browserify');
var gutil = require('gulp-util');

gulp.task('js', function () {

    return gulp.src('src/**/*.js', {base: 'src'})

        // transform file objects using gulp-tap plugin
        .pipe(plugins.tap(function (file) {

            gutil.log('bundling ' + file.path);

            // replace file contents with browserify's bundle stream
            file.contents = browserify(file.path, {debug: true})
                .transform('babelify', {presets: ['@babel/preset-env']})
                .bundle();
        }))

        // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
        .pipe(plugins.buffer())

        // load and init sourcemaps
        .pipe(plugins.sourcemaps.init({loadMaps: true}))

        // uglify
        .pipe(plugins.uglify())

        // write sourcemaps
        .pipe(plugins.sourcemaps.write('./'))

        .pipe(gulp.dest('dest'));

});
