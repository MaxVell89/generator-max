import gulp from 'gulp';
import include from 'gulp-include';
// import uglify from 'gulp-uglify';
import config from '../config';
import server from './server';

gulp.task('js', (done) => {
    gulp.src(config.src.js+'/**/*.js')
        .pipe(include())
        // .on('error', function(){notify("Javascript include error");})
        //.pipe(uglify())
        .pipe(gulp.dest(config.dest.js+'/'));
    server.server.reload();
    done();
    //.pipe(reload({stream: true}));
});

const build = gulp => gulp.parallel('js');
const watch = gulp => () => gulp.watch(config.src.js+'/**/*.js', gulp.parallel('js'));

module.exports.build = build;
module.exports.watch = watch;
