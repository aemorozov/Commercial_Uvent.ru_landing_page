const browserSync = require("browser-sync");
const { sync } = require("del");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssMinify = require("gulp-clean-css");
const gcssmq = require("gulp-group-css-media-queries");
const gulpSass = require("gulp-sass");
const jsMinify = require("gulp-uglify");
const sass = require("sass");
const htmlMinify = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");

const gulpSassWorker = gulpSass(sass);

const dist = "./dist/";
const src = "./src/";

const images = "img/";
const html = "html/";
const styles = "styles/";
const js = "js/";

const htmlAll = `${src}${html}*.html`;
const jsAll = `${src}${js}*.js`;
const stylesAll = `${src}${styles}*.scss`;

const processHTML = () => {
  return gulp
    .src(htmlAll)
    .pipe(htmlMinify({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({ stream: true }));
};

const processStyles = () => {
  return gulp
    .src(stylesAll)
    .pipe(gulpSassWorker().on("error", gulpSassWorker.logError))
    .pipe(autoprefixer({ grid: true }))
    .pipe(gcssmq())
    .pipe(cssMinify())
    .pipe(gulp.dest(dist))
    .pipe(browserSync.stream());
};

const processJS = () => {
  return gulp
    .src(jsAll)
    .pipe(jsMinify())
    .pipe(gulp.dest(`${dist}${js}`))
    .pipe(browserSync.stream());
};

const processImages = () => {
  return gulp
    .src(`${src}${images}**/*`)
    .pipe(imagemin())
    .pipe(gulp.dest(`${dist}${images}`));
};

const clean = async () => {
  return sync(dist, { force: true });
};

const watchDev = () => {
  gulp.watch(stylesAll, processStyles).on("change", browserSync.reload);
  gulp.watch(htmlAll, processHTML).on("change", browserSync.reload);
  gulp.watch(jsAll, processJS).on("change", browserSync.reload);
};

browserSync.create();

const initBrowserSync = () => {
  browserSync.init({
    server: {
      baseDir: dist,
      serveStaticOptions: {
        extensions: ["html"],
      },
    },
    port: 8080,
    ui: { port: 8081 },
    open: true,
  });
};

const jobs = [clean, processHTML, processStyles, processJS, processImages];

module.exports.default = gulp.parallel(...jobs, initBrowserSync, watchDev);
module.exports.build = gulp.series(...jobs);
