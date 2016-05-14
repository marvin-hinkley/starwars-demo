var gulp  = require('gulp'),
    ts    = require('gulp-typescript'),
    sass  = require('gulp-sass');

gulp.task('typescript', function () {
  return gulp.src('src/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'output.js'
    }))
    .pipe(gulp.dest('built/local'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('copy', function () {

});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.ts', ['typescript']);
});

gulp.task('default', function () {
  gulp.run('typescript', 'sass', 'copy');
});
