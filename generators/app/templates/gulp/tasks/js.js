import gulp from 'gulp';
import include from 'gulp-include';
import uglify from 'gulp-uglify';
import rename from "gulp-rename";
import config from '../config';
import server from './server';

gulp.task('js', (done) => {
    gulp.src(config.src.js+'/**/*.js')
        .pipe(include())
        // .on('error', function(){notify("Javascript include error");})
        //.pipe(uglify())
        //.pipe(rename('lib.min.js'))
        .pipe(gulp.dest(config.dest.js+'/'));
    server.server.reload();
    done();
    //.pipe(reload({stream: true}));
});

gulp.task('js:libs', (done) => {
    gulp.src(config.src.js+'/lib.js')
        .pipe(include())
        // .on('error', function(){notify("Javascript include error");})
        .pipe(uglify())
        .pipe(rename('lib.min.js'))
        .pipe(gulp.dest(config.dest.js+'/'));
    server.server.reload();
    done();
    //.pipe(reload({stream: true}));
});

const build = gulp => gulp.parallel('js', 'js:libs');
const watch = gulp => () => gulp.watch(config.src.js+'/**/*.js', gulp.parallel('js'));

// const build = gulp => gulp.series('js', 'js:libs');
// const watch = gulp => () => gulp.watch(config.src.img + '/*', gulp.parallel('copy:img', 'copy:fonts'));

module.exports.build = build;
module.exports.watch = watch;
