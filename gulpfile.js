var gulp = require('gulp');
var filter = require('gulp-filter');
var kclean = require('gulp-kclean');
var modulex = require('gulp-modulex');
var path = require('path');
var rename = require('gulp-rename');
var packageInfo = require('./package.json');
var cwd = process.cwd();
var src = path.resolve(cwd, 'lib');
var build = path.resolve(cwd, 'build');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var replace = require('gulp-replace');

gulp.task('lint', function () {
    return gulp.src(['./lib/**/*.js', '!./lib/**/xtpl/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'))
        .pipe(jscs());
});

gulp.task('clean', function () {
    return gulp.src(build, {
        read: false
    }).pipe(clean());
});

gulp.task('build', ['lint', 'less', 'xtpl'], function () {
    gulp.src('./lib/**/*.css').pipe(gulp.dest('build'));
    ['date-picker', 'date-picker/i18n/zh-cn', 'date-picker/i18n/en-us'].forEach(function (tag) {
        var packages = {};
        packages[tag] = {
            base: path.resolve(src, tag)
        };
        var basename = path.basename(tag);
        var dirname = path.dirname(tag);
        gulp.src('./lib/' + tag + '.js')
            .pipe(modulex({
                modulex: {
                    packages: packages
                }
            }))
            .pipe(kclean({
                options: {
                    prefixMode: 'standard'
                },
                files: [
                    {
                        src: './lib/' + tag + '-debug.js',
                        outputModule: tag
                    }
                ]
            }))
            .pipe(replace(/@VERSION@/g, packageInfo.version))
            .pipe(gulp.dest(path.resolve(build, dirname)))
            .pipe(filter(basename + '-debug.js'))
            .pipe(replace(/@DEBUG@/g, ''))
            .pipe(uglify())
            .pipe(rename(basename + '.js'))
            .pipe(gulp.dest(path.resolve(build, dirname)));
    });
});

gulp.task('mx', function () {
    var aggregateBower = require('aggregate-bower');
    aggregateBower('bower_components/', 'mx_modules/');
});

gulp.task('xtpl', function () {
    var gulpXTemplate = require('gulp-xtemplate');
    var XTemplate = require('xtemplate');
    gulp.src('lib/**/*.xtpl').pipe(gulpXTemplate({
        wrap: false,
        runtime: 'xtemplate/runtime',
        suffix: '.xtpl',
        XTemplate: XTemplate
    })).pipe(gulp.dest('lib'));
});

gulp.task('less', function () {
    var less = require('gulp-less');
    gulp.src('lib/date-picker/assets/dpl.less').pipe(less({
        paths: [path.join(__dirname, 'lib/date-picker/assets/')]
    })).pipe(gulp.dest('lib/date-picker/assets/'));
});

gulp.task('auto-d', function () {
    require('auto-deps')(cwd);
});

gulp.task('default', ['build']);