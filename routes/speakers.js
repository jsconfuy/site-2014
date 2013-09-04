exports.index = function(request, response) {
  console.log(request.user);
  response.render('speakers/index.jade', {username: request.user.username});
};