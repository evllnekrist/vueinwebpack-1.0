'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: [
		'./src/index.js'
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'

			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
		        test: /\.(png|jpg|gif|svg)$/,
		        loader: 'file-loader',
		        options: {
		          name: '[name].[ext]?[hash]'
		    	}
		    },
		    { 
		        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
		        loader: 'url-loader?limit=100000' 
		    }
		]
	},
	devServer: {
		historyApiFallback: true,
	    // noInfo: true,
	    // overlay: true
  	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
	]
}