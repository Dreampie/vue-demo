var webpack = require("webpack");
var version = require("../package.json").version;
var banner =
  "/**\n" +
  " * vue-demo v" + version + "\n" +
  " * https://github.com/Dreampie/vue-demo\n" +
  " * Released under the MIT License.\n" +
  " */\n";

module.exports = [
  {
    entry: "./src/app.coffee",
    output: {
      path: "./dist",
      filename: "app.js"
    },
    module: {
      loaders: [
        {test: /\.less/, loader: 'style!css!less'},
        {test: /\.coffee/, loader: 'coffee'},
        {test: /\.html$/, loader: "html"},
        {test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff"},
        {test: /\.(eot|svg|ttf)$/, loader: "file"}
      ]
    },
    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.html', '.less', '.js', '.coffee']
    },
    plugins: [
      new webpack.BannerPlugin(banner, {raw: true})
    ]
  }
];
