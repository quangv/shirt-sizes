module.exports = {
  entry: './entry.js',
  output: {
    path: 'public/build',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public'
  }
}
