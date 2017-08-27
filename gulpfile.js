const dev = 'dev';
const dist = 'dist';
const src = 'src/*';

const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const uglifycss = require('gulp-uglifycss');

gulp.task('sass', () =>
    sass(src)
        .on('error', sass.logError)
        .pipe(gulp.dest(dev))
);

gulp.task('uglifycss', () =>
    sass(src)
        .on('error', sass.logError)
	    .pipe(uglifycss({
	      "maxLineLen": 80,
	      "uglyComments": true
	    }))
        .pipe(gulp.dest(dist))
);

gulp.task('default', () => {
    return gulp.watch(src,['sass','uglifycss']);
});

 //χρυσός