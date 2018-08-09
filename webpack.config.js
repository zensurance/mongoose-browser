const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Below is the Webpack config Mongoose uses for testing
module.exports = {
  entry: './browser.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'mingoose',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        //exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  node: {
    // Replace these Node.js native modules with empty objects, Mongoose's
    // browser library does not use them.
    // See https://webpack.js.org/configuration/node/
    dns: 'empty',
    fs: 'empty',
    module: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'web',
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebookincubator/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebookincubator/create-react-app/issues/2488
            ascii_only: true
          }
        }
      })
    ]
  }
};
