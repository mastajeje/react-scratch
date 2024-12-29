const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), //where the bundle is saved
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // to apply the loader to all js and jsx files
        exclude: /node_modules/, // to exclude the node_modules folder
        loader: 'babel-loader', // the loader which will be used
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), //where the files are served from
    historyApiFallback: true, //404 responses will be redirected to index.html
    hot: true, //only reload the module that has been changed
  },
  resolve: {
    //to avoid writing the extension of the file
    extensions: ['.ts','.tsx','.js', '.jsx'],
  },
};
