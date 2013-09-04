var User = require('../models/user');

exports.ensureIsAdmin = function(redirectUrl) {
  var url = redirectUrl ? redirectUrl : "/login";
  return function(request, response, next) {
    User.findOne(request.session.passport.user._id, function(err, user) {
      if(err) request.flash('error', 'There was a problem, please contact an admin.');

      if(user && user.isAdmin()) next();
      else{
        request.flash('error', 'You are not authorized to access this section.');
        return response.redirect(url);
      }
    });
  };
};

exports.ensureIsSpeaker = function(redirectUrl) {
  var url = redirectUrl ? redirectUrl : "/login";
  return function(request, response, next) {
    User.findOne({_id: request.session.passport.user._id}, function(err, user) {
      if(err) request.flash('error', err);

      if(user && user.isSpeaker()) next();
      else {
        request.flash('error', 'You are not authorized to access this section.');
        return response.redirect(url);
      }
    });
  };
};