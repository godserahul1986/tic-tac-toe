import gulp from 'gulp';
import gutil from 'gulp-util';
import esLint from 'gulp-eslint';

import connect from 'gulp-connect';
import webPack from 'webpack';
import webPackDevServer from 'webpack-dev-server';
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

gulp.task('lint:scripts', () => {
    gulp.src(sourceDir.scripts)
        .pipe(esLint())
        .pipe(esLint.format())
        .pipe(esLint.failAfterError());
});

gulp.task('dev', ['lint:scripts'], () => {

    devConfig.entry.unshift('webpack/hot/only-dev-server');
    devConfig.entry.unshift('webpack-dev-server/client?http://localhost:8555');

    const compiler = webPack(devConfig);
    const server = new webPackDevServer(compiler, {
        publicPath: devConfig.output.publicPath,
        hot: true,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    });
    server.listen(portNumber, hostName, (err) => {
        if (err) {
            gutil.log('[ERROR]', err);
        } else {
            gutil.log('[BUILD]', 'Building code...');
        }
    });
});

gulp.task('prod', (done) => {
    webPack(devConfig, (err) => {
        if (err) {
            gutil.log('[ERROR]', 'Build error...');
        }
        done();
    });
});

gulp.task('default', ['prod'], () => {
    connect.server({
        port: portNumber
    });
});