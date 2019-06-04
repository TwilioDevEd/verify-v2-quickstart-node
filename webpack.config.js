const { resolve } = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './client/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'public/javascripts'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../images',
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader',
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  autoprefixer,
                ];
              },
            },
          },
        ],
      },
    ],
  },
};
