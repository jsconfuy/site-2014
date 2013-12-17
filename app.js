var http = require('http');
var fs = require('fs');
var express = require('express');
var expressValidator = require('express-validator');
var path = require('path');
var assert = require('assert');

var app = express();
var appValidator = expressValidator();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon("public/img/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(appValidator);
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res) {
  res.status(404).render('404', {title: 'Not found, 404'});
});

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

var routesDir = './routes';
fs.readdir(routesDir, function (err, files) {
  assert.ifError(err);
  files.forEach(function (file) {
    require(path.join(__dirname, routesDir, file)).init(app);
  });
});

var server = http.createServer(app).listen(app.get('port'), function() {
  var address = server.address();
  console.log("opened server on %j %s", address.address, address.port);
});
