import gulp from 'gulp';
import gutil from 'gulp-util';
import WebPack from 'webpack';
import WebPackDevServer from 'webpack-dev-server';
import devConfig from './webpack.dev.config.js';

const portNumber = '8555';
const hostName = 'localhost';

gulp.task('default', () => {
    const compiler = WebPack(devConfig);
    new WebPackDevServer(compiler, {})
        .listen(portNumber, hostName, (err) => {
            if (err) {
                gutil.log('[ERROR]', err);
            } else {
                gutil.log('[SUCCESS]', 'Building code...');
            }
        });
});

gulp.task('default', () => {
    const compiler = WebPack(devConfig);
    new WebPackDevServer(compiler, {})
        .listen(portNumber, hostName, (err) => {
            if (err) {
                gutil.log('[ERROR]', err);
            } else {
                gutil.log('[SUCCESS]', 'Building code...');
            }
        });
});