/*
  Source: https://browsersync.io/docs/gulp
*/

var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    stripDebug  = require('gulp-strip-debug'),
    minify = require('gulp-minify'),
    copy = require('gulp-copy'),
    del = require('del'),
    seq = require('run-sequence');

gulp.task('copy:lib', () => {
    gulp.src('js/hb_ams-lib.js')
        .pipe(copy('dist', { prefix: 1 }))
});
gulp.task('minify:lib', () =>
    gulp.src('js/hb_ams-lib.js')
        .pipe(stripDebug())
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('delete-debug', function() {
    return del([
    //'dist/hb_ams-lib-debug.js',
    'dist/**/*-debug.js',
  ]);
})

gulp.task('release', (done) => {
    seq('copy:lib', 'minify:lib', 'delete-debug')
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["index.html", "js/*.js"],
        server: {
            baseDir: "./www/"
        }
    });
});

gulp.task('default', ['browser-sync']);
