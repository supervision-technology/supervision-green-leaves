var
        gulp = require("gulp"),
        util = require("gulp-util"),
        jshint = require("gulp-jshint"),
        concat = require("gulp-concat"),
        uglify = require("gulp-uglify"),
        cleanCSS = require('gulp-clean-css'),
        htmlmin = require('gulp-htmlmin'),
        debug = require("gulp-debug"),
        ngAnnotate = require('gulp-ng-annotate'),
        inject = require("gulp-inject"),
        browserSync = require('browser-sync').create(),
        clean = require('gulp-clean');

gulp.task("build-html", function () {
    return  gulp.src("src/site/**/*.html")
            .pipe(debug())
            .pipe(inject(gulp.src([
                "src/main/resources/static/js/vendor.js",
                "src/main/resources/static/js/app.min.js",
                "src/main/resources/static/css/vendor.css",
                "src/main/resources/static/css/app.min.css"
            ]),
                    {ignorePath: 'src/main/resources/static/', addRootSlash: false}
            ))
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest("src/main/resources/static"));
});

gulp.task("build-js", function () {
    //app
    gulp.src("src/site/**/*.js")
            .pipe(debug())
            .pipe(concat("app.min.js"))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest("src/main/resources/static/js"));

    //vendor
    return gulp.src([
        "bower_components/angular/angular.min.js",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-animate/angular-animate.min.js"
    ])
            .pipe(debug())
            .pipe(concat("vendor.js"))
            .pipe(gulp.dest("src/main/resources/static/js"));
});

gulp.task("build-css", function () {
    //app
    gulp.src("src/site/**/*.css")
            .pipe(debug())
            .pipe(concat("app.min.css"))
            .pipe(cleanCSS())
            .pipe(gulp.dest("src/main/resources/static/css"));
    //vendor
    return gulp.src([
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
        "bower_components/animate.css/animate.min.css"
    ])
            .pipe(debug())
            .pipe(concat("vendor.css"))
            .pipe(gulp.dest("src/main/resources/static/css"));

    return;
});

gulp.task("build-other", function () {
    //images
    gulp.src("src/site/img/*.*")
            .pipe(debug())
            .pipe(gulp.dest("src/main/resources/static/img"));
    //web fonts
    gulp.src("bower_components/bootstrap/dist/fonts/*.*")
            .pipe(debug())
            .pipe(gulp.dest("src/main/resources/static/fonts"));
});

gulp.task("build", ["build-html", "build-js", "build-css", "build-other"]);

gulp.task("serve", ["build", "watch"], function () {
    browserSync.init({
        server: {
            baseDir: "src/main/resources/static"
        }
    });
});

gulp.task("serve-html", ["build-html"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("serve-js", ["build-js"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("serve-css", ["build-css"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("watch", function () {
    gulp.watch("src/site/**/*.html", ["serve-html"]);
    gulp.watch("src/site/**/*.js", ["serve-js"]);
    gulp.watch("src/site/**/*.css", ["serve-css"]);
});

gulp.task("clean", function () {
    gulp.src("src/main/resources/static", {read: false})
            .pipe(clean({force: true}));
});

gulp.task("default", ["build"]);