"use strict";

const gulp = require('gulp');
const connect = require('gulp-connect'); //Run local dev server
const open = require('gulp-open'); //Open a URL in a web browser
const browserify = require('browserify'); //Bundle Js
const reactify = require('reactify');//transform jsx to js
const source = require('vinyl-source-stream');//Conventional text for gulp
const concat = require('gulp-concat');
const lint = require('gulp-eslint');


const config ={
  port: 9005,
  devBaseUrl: 'http://localhost',
  path: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/toastr.scss'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
};

//start a local development server

gulp.task('connect', function(){
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

gulp.task('open', ['connect'], function(){
  gulp.src('dist/index.html').pipe(open(({uri: config.devBaseUrl + ':' + config.port + '/'})))
});

gulp.task('html', function () {
  gulp.src(config.path.html)
    .pipe(gulp.dest(config.path.dist))
    .pipe(connect.reload());
});
gulp.task('js', function () {
  browserify(config.path.mainJs)
    .transform(reactify)
    .bundle()
    .on('error ', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.path.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function(){
  gulp.src(config.path.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.path.dist + '/css'));
});

gulp.task('images', function () {
  gulp.src(config.path.images)
    .pipe(gulp.dest(config.path.dist + '/images'))
    .pipe(connect.reload());

    //publish favicon
    gulp.src('./src/favicon.ico')
      .pipe(gulp.dest(config.path.dist));
})

// gulp.task('lint', function () {
//   return gulp.src(config.path.js)
//     .pipe(lint({configFile: 'eslint.config.json'}))
//     .pipe(lint.format());
// });

gulp.task('watch', function () {
  gulp.watch(config.path.html, ['html']);
  gulp.watch(config.path.js, ['js']); //lint was removed
});

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']); //lint was removed
