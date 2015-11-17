const config = {
	context: __dirname + "/src",
	entry: __dirname + '/src/index.jsx',
	output: {
		path: __dirname + "/build",
		filename: "build.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				loaders: [
					'babel'
				]
			}
		]
	}
};

module.exports = config;