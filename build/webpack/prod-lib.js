import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeJsPlugin from 'optimize-js-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import mediaPacker from 'css-mqpacker';
import config from '../config';
import baseConfig from './base';

function getDirectories(src) {
  return fs.readdirSync(src).filter((file) => {
    return fs.statSync(path.join(src, file)).isDirectory();
  });
}

const componentsPath = 'src/components';
const components = getDirectories(path.resolve(__dirname, '../../', componentsPath));

baseConfig.entry = {
  'vue-tk': ['./src/index.js'],
  'components/mdCore/index': ['./src/core']
};

components.forEach((component) => {
  baseConfig.entry[path.join('components', component, 'index')] = ['./' + path.join(componentsPath, component)];
});

const utilsPath = 'src/utils';
const utils = getDirectories(path.resolve(__dirname, '../../', utilsPath));

utils.forEach((util) => {
  baseConfig.entry[path.join('utils', util, 'index')] = ['./' + path.join(utilsPath, util)];
});

export default merge(baseConfig, {
  output: {
    path: config.rootPath,
    filename: '[name].js',
    library: 'vue-tk',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            })
          },
          postcss: [
            autoprefixer({
              browsers: ['last 3 versions', 'not IE < 10']
            }),
            mediaPacker()
          ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue',
      var: 'Vue'
    },
    axios: {
      root: 'axios',
      commonjs2: 'axios',
      commonjs: 'axios',
      amd: 'axios'
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: `/*!
* Vue Tk
*/   `,
      raw: true,
      entryOnly: true
    }),
    new ExtractTextPlugin('[name].css'),
    new OptimizeCssAssetsPlugin()
  ]
});
