const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");
const { sync } = require("del");
const gulp = require("gulp");
const cssMinify = require("gulp-clean-css");
const gcssmq = require("gulp-group-css-media-queries");
const gulpSass = require("gulp-sass");
const jsMinify = require("gulp-uglify");
const sass = require("sass");
const htmlMinify = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");

const distDir = "./dist/";
const srcDir = "./src/";

const htmlDir = "html/";
const htmlFiles = `${srcDir}${htmlDir}*.html`;

const jsDir = "js/";
const jsFiles = `${srcDir}${jsDir}*.js`;

const stylesDir = "styles/";
const styleFiles = `${srcDir}${stylesDir}*.scss`;

const imagesDir = "img/";
const imageFiles = `${srcDir}${imagesDir}**/*`;

const processHTML = () => {
  return gulp
    .src(htmlFiles)
    .pipe(htmlMinify({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.reload({ stream: true }));
};

const gulpSassWorker = gulpSass(sass);

const processStyles = () => {
  return gulp
    .src(styleFiles)
    .pipe(gulpSassWorker().on("error", gulpSassWorker.logError))
    .pipe(autoprefixer({ grid: true }))
    .pipe(gcssmq())
    .pipe(cssMinify())
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream());
};

const processJS = () => {
  return gulp
    .src(jsFiles)
    .pipe(jsMinify())
    .pipe(gulp.dest(`${distDir}${jsDir}`))
    .pipe(browserSync.stream());
};

const processImages = () => {
  return gulp
    .src(imageFiles)
    .pipe(imagemin())
    .pipe(gulp.dest(`${distDir}${imagesDir}`));
};

const clean = async () => {
  return sync(distDir, { force: true });
};

const watchDev = () => {
  gulp.watch(styleFiles, processStyles).on("change", browserSync.reload);
  gulp.watch(htmlFiles, processHTML).on("change", browserSync.reload);
  gulp.watch(jsFiles, processJS).on("change", browserSync.reload);
  gulp.watch(imageFiles, processImages).on("change", browserSync.reload);
};

browserSync.create();

const initBrowserSync = () => {
  browserSync.init({
    server: {
      baseDir: distDir,
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

exports.default = gulp.parallel(...jobs, initBrowserSync, watchDev);
exports.build = gulp.series(...jobs);
