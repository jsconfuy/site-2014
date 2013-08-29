
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var admin = require('./routes/admin');
var http = require('http');
var path = require('path');
var passport = require('passport');
var loginUtils = require('connect-ensure-login');
var LocalStrategy = require('passport-local').Strategy;

//Passport Configuration
passport.use(new LocalStrategy(
  function(username, password, done) {
    if(username == 'admin' && password == 'admin') {
      return done(null, {username: 'admin', id: '1'});
    } else {
      return done(null, false, { message: 'Incorrect username or password.' });
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  if(id == '1') done(null, user);
  else done('User can not be found on the database');
});

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
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Public
app.get('/', routes.index);
app.get('/speakers', routes.speakers);
app.get('/proposals', routes.proposals);
app.get('/venue', routes.venue);
app.get('/login', admin.login);

//Administration
app.get('/logout', admin.logout);
app.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true }));
app.get('/admin/speakers', loginUtils.ensureLoggedIn(), admin.speakers);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
