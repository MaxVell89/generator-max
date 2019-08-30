import gulp from 'gulp';
import include from 'gulp-include';
// import uglify from 'gulp-uglify';
import config from '../config';

gulp.task('js', () => {
    gulp.src(config.src.js+'/**/*.js')
        .pipe(include())
        // .on('error', function(){notify("Javascript include error");})
        //.pipe(uglify())
        .pipe(gulp.dest(config.dest.js+'/'))
        .pipe(reload({stream: true}));
});

const build = gulp => gulp.parallel('js');
const watch = gulp => () => gulp.watch(config.src.js+'/**/*.js', gulp.parallel('js'));

module.exports.build = build;
module.exports.watch = watch;