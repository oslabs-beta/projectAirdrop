const path = require('path');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_DEV_SERVER_URL = 'http://localhost:3000';

module.exports = {
  entry: path.resolve(__dirname, 'client/index'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: '/api',
        handler: 'CacheFirst',
        options: {
          cacheName: 'api-cache',
          backgroundSync: {
            name: 'background-queue',
            options: {
              maxRetentionTime: 60 * 60,
            }
          }
        }
      }],
    })
  ],
  devServer: {
    contentBase: `${__dirname}/client/dist`,
    hot: true,
    proxy: {
      '/api': NODE_DEV_SERVER_URL,
    },
  },
};
