var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    assert = require('assert'),
    path = require('path');

/**
 * Module dependencies.
 */
try {
    require('strong-agent').profile();   
}catch(e){
}
var http = require('http');
var express = require('express');
//var flash = require('express-flash');
var path = require('path');
//var passport = require('passport');

//var routes = require('./routes');
//var auth = require('./routes/auth');
//var admin = require('./routes/admin');
//var proposals = require('./routes/proposals');
//var users = require('./routes/users');
//var speakers = require('./routes/speakers');
//var config = require('./config');

//var loginUtils = require('connect-ensure-login');
//var authUtils = require('./utils/auth');

//var mongoose = require('mongoose');
//var User = require('./models/user');

//Connect to the database
//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/jsconfuy');

//Configure passport
//config.passport(passport);

//Create the express app
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon("public/img/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.bodyParser());
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

http.createServer(app).listen(app.get('port'), function(){
  var urlOfApp = 'http://localhost:' + app.get('port');
  console.log('server running : ' + urlOfApp);
});
