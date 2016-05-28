var gulp        = require('gulp'),
    ts          = require('gulp-typescript')
    tsProject   = ts.createProject('tsconfig.json'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('typescript', function () {
  return gulp.src(['typings/browser.d.ts', 'src/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});
gulp.task('copy:config', function () {
  return gulp.src('config/**/*')
    .pipe(gulp.dest('dist/config'));
});
gulp.task('copy:img', function () {
  return gulp.src('img/**/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.ts', ['typescript']);
  gulp.watch('src/**/*.html', ['copy:html']);
});

gulp.task('default', function () {
  gulp.run('sass', 'copy:html', 'copy:img', 'copy:config');
});
