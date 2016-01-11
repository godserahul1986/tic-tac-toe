const devConfig = {
	context: __dirname + "/src",
	entry: __dirname + '/src/index.jsx',
	output: {
		path: __dirname + "/build",
		filename: "build.js"
	},
	module: {
		loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: [ 'babel-loader?optional[]=runtime&stage=0' ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loaders: [ 'style', 'css', 'sass' ]
            }
		]
	}
};

export default devConfig;