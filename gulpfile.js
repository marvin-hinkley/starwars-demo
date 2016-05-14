var gulp        = require('gulp'),
    ts          = require('gulp-typescript')
    tsProject   = ts.createProject('tsconfig.json'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('typescript', function () {
  return gulp.src('src/**/*.ts')
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
gulp.task('copy:js', function () {
  return gulp.src('lib/**/*.js')
    .pipe(gulp.dest('dist/js'));
});
gulp.task('copy:img', function () {
  return gulp.src('img')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.ts', ['typescript']);
});

gulp.task('default', function () {
  gulp.run('typescript', 'sass', 'copy:html', 'copy:img', 'copy:js');
});
