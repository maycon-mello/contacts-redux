var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config');
var express = require('express');
//var WebpackDevServer = require('webpack-dev-server');

// new WebpackDevServer(webpack(config), {
// 	publicPath: config.output.publicPath,
// 	hot: true,
// 	historyApiFallback: true
// }).listen(5151, 'localhost', function (err, result) {
// 	if (err) {
// 		console.log(err);
// 	}
//
// 	console.log('Listening at localhost:5050');
// });


var app = new express()
var port = 5151

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist/public'));

app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
