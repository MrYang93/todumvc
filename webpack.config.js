module.exports = {
  entry: './src/index.js',
  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  devtool: 'eval',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {test: /\.css$/,use: ['style-loader','css-loader']},
      {test: /\.(jpe?g|png)$/,loader: 'file-loader'}
    ]
  }
}
