const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin/lib');
const nodeLoader = require("node-loader");

let config = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.node' ],
    plugins: [
        new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: {
    knex: 'commonjs knex'
  },
  plugins: [
    new UglifyJsPlugin({ 
      sourceMap: false, 
      cache: false,
      uglifyOptions: { 
        keep_classnames: true,
        keep_fnames: true,
        mangle: false,
      },
    })
  ]
};

module.exports = config;