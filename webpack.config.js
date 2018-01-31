const path = require('path');

module.exports = {
	entry: {
		bundle: './src/entry.jsx'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
		publicPath: "dist"
	},
	module: {
		rules: [{
			test: /(\.jsx?$|\.js?$)/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			}
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, 'client'),
		port: 9000
	}
}