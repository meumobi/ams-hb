/*
  Source: https://browsersync.io/docs/gulp
*/

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var stripDebug  = require('gulp-strip-debug');
var minify = require('gulp-minify');
 
gulp.task('release', () =>
    gulp.src('js/hb_ams-lib.js')
        .pipe(stripDebug())
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            }
        }))
        .pipe(gulp.dest('dist'))
);
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["index.html", "js/*.js"],
	server: true
    });
});

gulp.task('default', ['browser-sync']);
