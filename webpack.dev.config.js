import webPack, { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';

export default {
    entry: [
        __dirname + '/src/index.jsx'
    ],
    output: {
        publicPath: '/build/',
        path: __dirname + "/build",
		filename: "build.js"
	},
	module: {
		loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot',
                    'babel-loader?optional[]=runtime&stage=0'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loaders: [ 'style', 'css', 'sass' ]
            }
		]
	},
    plugins: [
        new webPack.HotModuleReplacementPlugin(),
        new webPack.NoErrorsPlugin()
    ]
};
