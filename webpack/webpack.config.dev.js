const Path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js',
		assetModuleFilename: '[path][name][ext][query]',
	},
	devServer: {
		hot: true,
	},
	plugins: [
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: Path.resolve(__dirname, '../public'),
					to: 'public',
				},
			],
		}),
		new ESLintWebpackPlugin({
			extensions: [`js`, `jsx`],
			exclude: [`/node_modules/`, `/bower_components/`],
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
					'style-loader',
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
			// {
			// 	test: /\.m?js$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['@babel/preset-env', { targets: 'defaults' }],
			// 		},
			// 	},
			// },
		],
	},
});
