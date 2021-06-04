const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
let options = {};
// use: ['babel-loader', 'eslint-loader'], vs. plugins: [new ESLintPlugin(options)], (eslint-webpack-plugin)
// will change use: ['babel-loader', 'eslint-loader'], --> use: ['babel-loader'], for now

module.exports = {
	// entry: path.join(__dirname, "src", "index.js"),
	entry: path.join(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.bundle.js',
	},
	target: ['web', 'es5'],
	mode: process.env.NODE_ENV || 'development',
	// resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: { contentBase: path.join(__dirname, 'src') },
	plugins: [new ESLintPlugin(options)],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
};
