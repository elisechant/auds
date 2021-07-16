const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const webpackConfig = {
	mode: isDev ? 'development' : 'production',
	entry: {
		tokens: '/src/index.tokens.ts',
		auds: './src/index.auds.ts',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'AuDS Lite',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
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
				test: /\.(tsx|ts)?$/,
				use: ['ts-loader' ],
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
