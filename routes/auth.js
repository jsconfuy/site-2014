exports.speakers = function(request, response) {
  response.render('admin/speakers.jade');
};

exports.login = function(request, response) {
  response.render('login.jade');
};

exports.logout = function(request, response) {
  request.logout();
  request.flash('info', 'Logged Out succesfully');
  response.redirect('/');
}