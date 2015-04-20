/*globals require, console */
'use strict';

var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

app.use('/public', express.static('public'));

app.get('/steven', function (req, res) {
  console.log('steven is watching');
  res.send('Hello World!');
});

app.get('/proxy', function (req, res) {
	req.url = req.url.replace('/proxy', '');
	console.log (req.url);
  proxy.web(req, res, { target: 'http://cnn.com:80'});
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});