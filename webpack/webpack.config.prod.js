const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	stats: 'errors-only',
	bail: true,
	output: {
		path: Path.resolve(__dirname, '../build'),
		filename: 'js/[name]_[fullhash:4].js',
		chunkFilename: 'js/[name]_[fullhash:4].chunk.js',
		assetModuleFilename: '[path][name][ext][query]',
		clean: true,
	},
	plugins: [
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: Path.resolve(__dirname, '../public'),
					to: 'public',
				},
				{
					from: Path.resolve(__dirname, '../tools'),
					to: 'tools',
				},
			],
		}),
		new Webpack.optimize.ModuleConcatenationPlugin(),
		new MiniCssExtractPlugin({
			filename: 'bundle_[fullhash:4].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											//Options
										},
									],
								],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
});
