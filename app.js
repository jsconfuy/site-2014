/**
 * Module dependencies.
 */

var http = require('http');
var express = require('express');
var flash = require('express-flash');
var path = require('path');
var passport = require('passport');

var routes = require('./routes');
var auth = require('./routes/auth');
var admin = require('./routes/admin');
var proposals = require('./routes/proposals');
var users = require('./routes/users');
var speakers = require('./routes/speakers');
var config = require('./config');

var loginUtils = require('connect-ensure-login');
var authUtils = require('./utils/auth');

var mongoose = require('mongoose');
var User = require('./models/user');

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

  //Seed admin user for development
  User.findOne({username: 'admin'}, function(err, user){
    if(err) { console.log('Error looking uo for the admin user'); }

    if(!user) { new User({username: 'admin', password: 'admin', active: true, role: 'admin'}).save(function(err) { if(err) { console.log(err); } }); }

    if(user) { user.active = true; user.save(function(err) { if(err) { console.log(err); } }); }
  });
}

//Routes

//Pages
app.get('/', routes.index);
app.get('/speakers', routes.speakers);
app.get('/venue', routes.venue);

//Auth
app.get('/login', loginUtils.ensureLoggedOut(), auth.login);
app.get('/logout', auth.logout);
app.post('/login',
    loginUtils.ensureLoggedOut(),
    passport.authenticate('local',
      {successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: 'Invalid username or password',
      successFlash: 'Welcome!' }
    )
);

//Proposals
app.get('/proposals/new', proposals.new);
app.post('/proposals', proposals.create);

//Administration

app.get('/admin', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), admin.index);

//Proposals
app.get('/admin/proposals', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(),  proposals.index);
app.get('/admin/proposals/:id/delete', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), proposals.destroy);
app.get('/admin/proposals/:id', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), proposals.show);

//Users
app.get('/admin/users', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), users.index);
app.get('/admin/users/new', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), users.new);
app.post('/admin/users', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), users.create);
app.get('/admin/users/:id/edit', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), users.edit);
app.put('/admin/users', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), users.update);

//Speakers
app.get('/admin/speakers', loginUtils.ensureLoggedIn(), authUtils.ensureIsAdmin(), admin.speakers);
app.get('/speakers/me', loginUtils.ensureLoggedIn(), authUtils.ensureIsSpeaker(), speakers.index);


//Server creation
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});