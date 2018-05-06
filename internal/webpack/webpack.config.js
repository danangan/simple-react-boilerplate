const webpack = require('webpack');
const path = require('path');
const resolve = file => require('path').resolve(__dirname, file)

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'My React App',
	template: './app/index.html',
	filename: 'index.html',
	inject: 'body'
  })

module.exports = {
	mode: 'development',
  entry: './app/main.js',
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.join(process.cwd(), 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',

            options: {
              presets: ['env']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
			{
				test: /\.scss$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
            loader: 'css-loader',
						options: {
              modules: true,
              // importLoaders: 1,
              camelCase: true
						}
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader'
          }
				]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
		]
	},
  devtool: 'source-map',
  plugins: [HtmlWebpackPluginConfig],
};
