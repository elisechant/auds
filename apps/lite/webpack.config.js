const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

NODE_ENV = 'development';

const webpackConfig = {
	mode: isDev ? 'development' : 'production',
	entry: {
		"auds.tokens": './src/auds.tokens.ts',
		"auds.variables": './src/auds.variables.ts',
		"auds": './src/auds.ts',
		"docs": './src/index.tsx',
	},
	output: {
		filename: `[name].js`,
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'AuDS Lite',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: `[name].css`,
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/i,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(js|tsx|ts)?$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/,
			},
		]
	}
};

if (isDev) {
	webpackConfig.devtool = 'inline-source-map';
	webpackConfig.devServer = {
		contentBase: './dist',
		hot: true,
	}
}

module.exports = webpackConfig;
