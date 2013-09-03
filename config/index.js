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
            if(err) { console.log(err); }
            if(isMatch) { return done(null, user); }
            else { return done(null, false, { message: 'Incorrect password.' }) }
          });

        });
      }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
      if(err) {
        done('User can not be found on the database');
      } else {
        done(null, id);
      }
    });
  });
};