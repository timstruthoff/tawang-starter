const path = require('path');
const Tawang = require('@mediamonks/tawang');

module.exports = {
  entry: path.resolve(__dirname, '../../src/script.js'),
  mode: 'production',
  watch: true,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  externals: {
    Animation: 'commonjs Animation',
    Diagnostics: 'commonjs Diagnostics',
    FaceTracking: 'commonjs FaceTracking',
    Reactive: 'commonjs Reactive',
    Scene: 'commonjs Scene',
  },
  plugins: [
    new Tawang({
      serverHost: 'tawang.eu.dev.monkapps.com',
    }),
  ],
};
