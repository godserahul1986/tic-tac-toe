import webpackConfig from './webpack.config.js';
import webPack, { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';

const getHotEntries = () => {
    return [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8555',
        webpackConfig.entry
    ];
};

const getHotLoaders = () => {
    const loaders = webpackConfig.module.loaders || [];
    return loaders.map((loader, index) => {
        if (index === 0) {
            loader.loaders.unshift('react-hot');
        };
        return loader;
    });
};

export default {
    ...webpackConfig,
    entry: getHotEntries(),
    module: {
		loaders: getHotLoaders()
	},
    plugins: [
        new webPack.HotModuleReplacementPlugin(),
        new webPack.NoErrorsPlugin()
    ]
};
