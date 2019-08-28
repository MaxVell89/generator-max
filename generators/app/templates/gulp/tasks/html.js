import gulp from 'gulp';
import config from '../config.js';

gulp.task('html', () => gulp
  .src(config.src.templates + '/**/*.*')
  .pipe(gulp.dest(config.dest.html))
);

const build = gulp => gulp.parallel('html');
const watch = gulp => {
  return function() {
    gulp.watch([
      config.src.templates + '/**/_*.html'
    ], gulp.parallel('html'));
  }
};

module.exports.build = build;
module.exports.watch = watch;