import webPack, { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';

export default {
    entry: __dirname + '/src/index.jsx',
    output: {
        path: __dirname + "/build/",
		filename: "build.js"
	},
	module: {
		loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'babel'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loaders: [ 'style', 'css', 'sass' ]
            }
		]
	}
};
