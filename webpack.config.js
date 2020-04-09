module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
