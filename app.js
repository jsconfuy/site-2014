/**
 * Module dependencies.
 */

var express = require('express');
var flash = require('express-flash');
var path = require('path');
var routes = require('./routes');
var admin = require('./routes/admin');
var proposals = require('./routes/proposals');
var config = require('./config');
var http = require('http');
var passport = require('passport');
var loginUtils = require('connect-ensure-login');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://localhost/jsconfuy');

//Configure passport
config.passport(passport);

//Create the express app
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: 'kjs,.liuiyoaslasiouo' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes

//Public
app.get('/', routes.index);
app.get('/speakers', routes.speakers);
app.get('/venue', routes.venue);

//Auth
app.get('/login', admin.login);
app.get('/logout', admin.logout);
app.post('/login', 
  passport.authenticate('local', 
    {successRedirect: '/', 
    failureRedirect: '/login', 
    failureFlash: 'Invalid username or password', 
    successFlash: 'Welcome!' }
  )
);

//Proposals
app.get('/proposals/new', proposals.new);
app.get('/proposals', loginUtils.ensureLoggedIn(), proposals.index);
app.post('/proposals', proposals.create);
app.get('/proposals/:id/delete', loginUtils.ensureLoggedIn(), proposals.destroy);
app.get('/proposals/:id', loginUtils.ensureLoggedIn(), proposals.show);

//Administration
app.get('/admin/speakers', loginUtils.ensureLoggedIn(), admin.speakers);

//Server creation
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
