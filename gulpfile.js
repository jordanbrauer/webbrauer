// gulpfile.js

// gulp plugins
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');

// variables
// ...

// clean task
gulp.task('clean', () => del('./css/*.css'));

// compile sass task
gulp.task('compile', ['clean'], () => {
  return gulp.src('./scss/webbrauer.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// batch tasks
gulp.task('sass', ['clean', 'compile']);
gulp.task('build', ['sass']);

// watch task
gulp.task('watch', ['build'], () => gulp.watch('./sass/**/*', ['build']));

// default task
gulp.task('default', () => {
  console.log('testing...');
});
