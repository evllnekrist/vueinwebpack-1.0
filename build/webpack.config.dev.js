'use strict'

// var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: ['./src/index.js'],
	// output: {
	//     path: path.resolve(__dirname, './dist'),
	//     publicPath: '/dist/',
	//     filename: 'bundle.js'
	//    // filename: '[name].[hash].bundle.js'
	// },
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
				use: 'babel-loader',
				exclude: /node_modules/
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
	resolve: {
		alias: {
	      'vue$': 'vue/dist/vue.esm.js'
	    },
	    extensions: ['*', '.js', '.vue', '.json']
	},
	devServer: {
		historyApiFallback: true,
	    noInfo: true,
	    overlay: true
  	},
	plugins:[
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	]
}