var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config');
var express = require('express');

var app = new express()
var port = 5151;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('build/public'));

app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/build/public/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
