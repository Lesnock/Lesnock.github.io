module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.scss$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
}
