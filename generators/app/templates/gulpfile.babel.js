import gulp from 'gulp';
import config from './gulp/config';

const getTaskBuild = task => require('./gulp/tasks/' + task).build(gulp);
const getTaskWatch = task => require('./gulp/tasks/' + task).watch(gulp);

gulp.task('clean', getTaskBuild('clean'));
gulp.task('copy', getTaskBuild('copy'));
gulp.task('server', () => getTaskBuild('server'));<% if (templates === 'nunjucks') { %>
gulp.task('nunjucks', () => getTaskBuild('nunjucks'));<% } %><% if (templates === 'pug') { %>
gulp.task('pug', () => getTaskBuild('pug'));<% } %><% if (templates === 'html') { %>
gulp.task('html', () => getTaskBuild('html'));<% } %><% if (css === 'sass') { %>
gulp.task('sass', () => getTaskBuild('sass'));<% } %><% if (sprites.indexOf('svg') !== -1) { %>
gulp.task('sprite:svg', () => getTaskBuild('sprite-svg'));<% } %><% if (svgo) { %>
gulp.task('svgo', () => getTaskBuild('svgo'));<% } %><% if (webp) { %>
gulp.task('webp', () => getTaskBuild('webp'));<% } %><% if (bundler === 'webpack') { %>
gulp.task('webpack', getTaskBuild('webpack'));<% } %><% if (bundler === 'manually') { %>
gulp.task('js', getTaskBuild('js'));<% } %>

gulp.task('copy:watch', getTaskWatch('copy'));<% if (templates === 'nunjucks') { %>
gulp.task('nunjucks:watch', getTaskWatch('nunjucks'));<% } %><% if (templates === 'pug') { %>
gulp.task('pug:watch', getTaskWatch('pug'));<% } %><% if (templates === 'html') { %>
gulp.task('html:watch', getTaskWatch('html'));<% } %><% if (css === 'sass') { %>
gulp.task('sass:watch', getTaskWatch('sass'));<% } %><% if (sprites.indexOf('svg') !== -1) { %>
gulp.task('sprite:svg:watch', getTaskWatch('sprite-svg'));<% } %><% if (svgo) { %>
gulp.task('svgo:watch', getTaskWatch('svgo'));<% } %><% if (webp) { %>
gulp.task('webp:watch', getTaskWatch('webp'));<% } %><% if (bundler === 'webpack') { %>
gulp.task('webpack:watch', getTaskWatch('webpack'));<% } %><% if (bundler === 'manually') { %>
gulp.task('js:watch', getTaskWatch('js'));<% } %>

const setmodeProd = done => {
  config.setEnv('production');
  config.logEnv();
  done();
}

const setmodeDev = done => {
  config.setEnv('development');
  config.logEnv();
  done();
}

gulp.task(
  'build',
  gulp.series(
    setmodeProd,
    'clean',<% if (sprites.indexOf('svg') !== -1) { %>
    'sprite:svg',<% } %><% if (svgo) { %>
    'svgo',<% } %><% if (webp) { %>
    'webp',<% } %><% if (css === 'sass') { %>
    'sass',<% } %><% if (templates === 'nunjucks') { %>
    'nunjucks',<% } %><% if (templates === 'pug') { %>
    'pug',<% } %><% if (templates === 'html') { %>
    'html',<% } %><% if (bundler === 'webpack') { %>
    'webpack',<% } %><% if (bundler === 'manually') { %>
    'js',<% } %>
    'copy'
  )
);

gulp.task(
  'build:dev',
  gulp.series(
    setmodeDev,
    'clean',<% if (sprites.indexOf('svg') !== -1) { %>
    'sprite:svg',<% } %><% if (svgo) { %>
    'svgo',<% } %><% if (webp) { %>
    'webp',<% } %><% if (css === 'sass') { %>
    'sass',<% } %><% if (templates === 'nunjucks') { %>
    'nunjucks',<% } %><% if (templates === 'pug') { %>
    'pug',<% } %><% if (templates === 'html') { %>
    'html',<% } %><% if (bundler === 'webpack') { %>
    'webpack',<% } %><% if (bundler === 'manually') { %>
    'js',<% } %>
    'copy'
  )
);

gulp.task(
  'watch',
  gulp.parallel(
    'copy:watch',<% if (templates === 'nunjucks') { %>
    'nunjucks:watch',<% } %><% if (templates === 'pug') { %>
    'pug:watch',<% } %><% if (templates === 'html') { %>
    'html:watch',<% } %><% if (sprites.indexOf('svg') !== -1) { %>
    'sprite:svg:watch',<% } %><% if (svgo) { %>
    'svgo:watch',<% } %><% if (webp) { %>
    'webp:watch',<% } %><% if (bundler === 'webpack') { %>
    'webpack:watch',<% } %><% if (bundler === 'manually') { %>
    'js:watch',<% } %><% if (css === 'sass') { %>
    'sass:watch'<% } %>
  )
);

gulp.task('default', gulp.series(['build:dev', 'server', 'watch']));
