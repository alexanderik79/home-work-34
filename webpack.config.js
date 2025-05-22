const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // або 'production' для оптимізації
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // Хешування імен файлів
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищення папки dist перед новою збіркою
  },
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Шрифти
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext]', // Хешування шрифтів
        },
      },
      // Зображення
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash][ext]', // Хешування зображень
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Оптимізація зовнішніх бібліотек (наприклад, lodash)
    },
  },
};