exports.index = function(request, response) {
  response.render('speakers/index.jade', { username: request.user.username });
};