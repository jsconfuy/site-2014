var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

exports.passport = function(passport) {    
  //Passport Configuration
  passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({active: true, username: username}, function(err, user){
          if(err) { return done(null, false, { message: 'Error authenticating the user.' });}

          if(!user) { return done(null, false, { message: 'Incorrect username.' }); }

          user.comparePassword(password, function(err, isMatch) {
            if(err) { done(null, false, { message: err }); }
            if(isMatch) { return done(null, user); }
            else { return done(null, false, { message: 'Incorrect password.' }); }
          });

        });
      }
  ));

  passport.serializeUser(function(user, done) {
    var sessionUser = { _id: user._id, username: user.username };
    if(user.firstName) sessionUser.firstName = user.firstName;
    if(user.lastName) sessionUser.lastName = user.lastName;
    if(user.email) sessionUser.email = user.email;
    done(null, sessionUser);
  });

  passport.deserializeUser(function(user, done) {
    User.findById(user._id, function(err, user){
      if(err) {
        done('User can not be found on the database');
      } else {
        done(null, user);
      }
    });
  });
};