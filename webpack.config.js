const path = require('path');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

const NODE_DEV_SERVER_URL = 'http://[::1]:3000';

module.exports = {
  entry: path.resolve(__dirname, 'client/index.jsx'),
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
        urlPattern: '/api/test',
        handler: 'CacheFirst',
        options: {
          cacheName: 'api-cache',
          backgroundSync: {
            name: 'background-queue',
            options: {
              maxRetentionTime: 24 * 60,
            }
          }
        }
      }],
    }),
    new WebpackPwaManifest({
      name: 'Legions MPA',
      short_name: 'MPA',
      description: 'Mental Performance Assessment',
      background_color: '#01579b',
      theme_color: '#01579b',
      start_url: '/?homescreen=1',
      icons: [
        {
          src: path.resolve('client/src/images//5th_SFG_ICON.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons')
        }
      ]
    })
  ],
    
  devServer: {
    contentBase: '/',
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': NODE_DEV_SERVER_URL,
    },
  },
};
