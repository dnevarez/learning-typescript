
// const gulp = require("gulp");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");

// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest("dist"));
// });
/////////////////////////////////////////
//******Add browserify and tsify ******//
/////////////////////////////////////////
// const gulp = require("gulp");
// const browserify = require("browserify");
// const source = require('vinyl-source-stream');
// const tsify = require("tsify");
// const paths = {
//   pages: ['src/*.html']
// }
//
// gulp.task("copy-html", function(){
//   return gulp.src(paths.pages)
//       .pipe(gulp.dest("dist"));
// });
//
// gulp.task("default", ["copy-html"], function () {
//     return browserify({
//         basedir: '.',
//         debug: true,
//         entries: ['src/main.ts'],
//         cache: {},
//         packageCache: {}
//     })
//     .plugin(tsify)
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest("dist"));
// });

/////////////////////////////////////////
//*************Add watchify************//
/////////////////////////////////////////

// const gulp = require("gulp");
// const browserify = require("browserify");
// const source = require('vinyl-source-stream');
// const watchify = require("watchify");
// const tsify = require("tsify");
// const gutil = require("gulp-util");
// const paths = {
//   pages: ['src/*.html']
// }
//
// const watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/main.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify)
// );
//
//
// gulp.task("copy-html", function(){
//   return gulp.src(paths.pages)
//       .pipe(gulp.dest("dist"));
// });
//
// function bundle() {
//   return watchedBrowserify
//       .bundle()
//       .pipe(source('bundle.js'))
//       .pipe(gulp.dest("dist"));
// }
//
// gulp.task("default", ["copy-html"], bundle);
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);

// Here we made three changes. We wrapped the browserify instance in a call to watchify and then hold the result.
// We call watchedBrowserify.on update, bundle; so the browserify will run the bundle function everytime one of the typescript files changes
// we call watchedBrowserify.on log, gutil.log; to log to the console.

/////////////////////////////////////////
//**************Add uglify*************//
/////////////////////////////////////////

// const gulp = require("gulp");
// const browserify = require("browserify");
// const source = require('vinyl-source-stream');
// const tsify = require("tsify");
// const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps');
// const buffer = require('vinyl-buffer');
// const paths = {
//     pages: ['src/*.html']
// };
//
// gulp.task("copy-html", function () {
//     return gulp.src(paths.pages)
//         .pipe(gulp.dest("dist"));
// });
//
// gulp.task("default", ["copy-html"], function () {
//     return browserify({
//         basedir: '.',
//         debug: true,
//         entries: ['src/main.ts'],
//         cache: {},
//         packageCache: {}
//     })
//     .plugin(tsify)
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest("dist"));
// });

/////////////////////////////////////////
//**************Add babel**************//
/////////////////////////////////////////

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const paths = {
    pages: ['src/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyHtml'], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});
