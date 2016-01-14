import gulp from 'gulp';
import gutil from 'gulp-util';
import esLint from 'gulp-eslint';

import connect from 'gulp-connect';
import webPack from 'webpack';
import webPackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';
import devConfig from './webpack.dev.config.js';

const portNumber = '8555';
const hostName = 'localhost';
const sourceDir = {
    styles: ['./src/styles/*.scss'],
    scripts: [
        './src/**/*.jsx',
        './src/**/*.js'
    ]
};
const statConfig = {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
};

gulp.task('lint:scripts', () => {
    gulp.src(sourceDir.scripts)
        .pipe(esLint())
        .pipe(esLint.format())
        .pipe(esLint.failAfterError());
});

gulp.task('dev', ['lint:scripts'], () => {
    const compiler = webPack(devConfig);
    const server = new webPackDevServer(compiler, {
        hot: true,
        inline: true,
        stats: statConfig
    });
    server.listen(portNumber, hostName, (err) => {
        if (err) {
            gutil.log('[ERROR]', err);
        } else {
            gutil.log('[BUILD]', 'Building code...');
        }
    });
});

gulp.task('copy', () => {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy'], (done) => {
    const buildConfig = Object.create(webpackConfig);

    webPack(buildConfig, (err, stats) => {
        if (err) {
            gutil.log('[ERROR]', 'Build error...');
        }
        gutil.log('[BUILD]', stats.toString(statConfig));
        done();
    });
});

gulp.task('default', ['build'], () => {
    connect.server({
        root: 'build',
        port: portNumber
    });
});