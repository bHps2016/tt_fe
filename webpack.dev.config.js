const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'bundle.js': ['./src/main.js', 'webpack-hot-middleware/client']
	},
	output: {
		path: '/',
		publicPath: 'http://localhost:3000/static/',
		filename: '[name]'
	},
	devServer: {
        quiet: true, 
        historyApiFallback: true,
    	noInfo: true
    },
	module: {
	    loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{ 
				test: /\.(html|tpl)$/, 
				loader: 'html-loader' 
			},
			{test: /\.eot/,loader : 'file?prefix=font/'},
			{test: /\.woff/,loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf/, loader : 'file?prefix=font/'}, 
			{test: /\.svg/, loader : 'file?prefix=font/'},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file?limit=8192',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
	    ]
	},
	devtool: '#eval-source-map',
  	resolve: {
	    extensions: ['', '.js', '.scss','.vue'],
	},
	plugins: [
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
  	]
};