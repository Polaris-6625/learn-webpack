const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  devServer: {
    //contentBase: path.resolve(__dirname,'dist'),
    hot: true,
    static: "./dist",
    // historyApiFallback: true,
    // compress: true
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        include: [path.join(__dirname, "./src/")],
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/i,
        include: [path.join(__dirname, "./src/")],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // 添加预设，使用正确的包名
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Test html File",
      template: path.join(__dirname, "./index.html"), // 确保这里的路径也正确指向模板文件
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"], // 添加js和jsx扩展名解析
  },
};
