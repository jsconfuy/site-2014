var LocalStrategy = require('passport-local').Strategy;

exports.passport = function(passport) {    
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
    if(id == '1') done(null, id);
    else done('User can not be found on the database');
  });
};