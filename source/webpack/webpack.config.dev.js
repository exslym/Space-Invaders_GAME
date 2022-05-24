const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-eval-source-map',
	// devtool: 'eval-cheap-module-source-map',
	output: {
		chunkFilename: 'js/[name].chunk.js',
	},
	devServer: {
		inline: true,
		hot: true,
	},
	plugins: [
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new Webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.s?css$/i,
				use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader'],
			},
			{
				test: /\.js$/,
				include: Path.resolve(__dirname, '../src'),
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						{
							plugins: ['@babel/plugin-proposal-class-properties'],
						},
					],
				},
			},
			{
				test: /\.js$/,
				include: Path.resolve(__dirname, '../src'),
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					emitWarning: true,
				},
			},
		],
	},
	externals: {
		jquery: 'jQuery',
	},
});
