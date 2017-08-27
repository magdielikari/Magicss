const dist = 'dist';
const edis = 'example/css';
const ccs = dist + '/magicss.css';
const source = 'source/magicss.scss';

const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const uglifycss = require('gulp-uglifycss');

gulp.task('sass', () =>
    sass(source)
        .on('error', sass.logError)
        .pipe(gulp.dest(dist))
);

gulp.task('uglifycss', () =>
    sass(source)
        .on('error', sass.logError)
	    .pipe(uglifycss({
	      "maxLineLen": 80,
	      "uglyComments": true
	    }))
        .pipe(gulp.dest(edis))
);

gulp.task('default', () => {
    return gulp.watch(source,['sass','uglifycss']);
});

 //χρυσός