/*jshint esversion: 6 */

const gulp = require("gulp");
const typescript = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const del = require("del");
const tsConfig = typescript.createProject("tsconfig.json");

gulp.task("tslint", () => {
  return gulp.src(['src/**/*.ts'])
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", () => {
    var tsResult = gulp.src(['src/**/*.ts'], { base: '' })
        .pipe(sourcemaps.init())
        .pipe(typescript(tsConfig));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

/**
 * Watch for changes in TypeScript files.
 */
gulp.task('watch', ['compile'], () => {
    gulp.watch(["src/**/*.ts"], ['tslint', 'compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
});


/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/**
 * Build the project.
 */
gulp.task("build", ['tslint', 'compile'], () => {
    console.log("Building the project ...");
});

gulp.task('default', ['tslint', 'compile']);
