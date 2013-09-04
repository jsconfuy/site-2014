var User = require('../models/user');

exports.ensureIsAdmin = function(redirectUrl) {
  var url = redirectUrl ? redirectUrl : "/login";
  return function(request, response, next) {
    User.findOne(request.session.passport.user, function(err, user) {
      if(err) request.flash('error', 'There was a problem, please contact an admin.');

      if(user && user.isAdmin()) next();
      else return response.redirect(redirectUrl);
    });
  };
};

exports.ensureIsSpeaker = function(redirectUrl) {
  var url = redirectUrl ? redirectUrl : "/login";
  return function(request, response, next) {
    User.findOne(request.session.passport.user, function(err, user) {
      if(err) request.flash('error', 'There was a problem, please contact an admin.');

      if(user && user.isSpeaker()) next();
      else return response.redirect(redirectUrl);
    });
  };
};