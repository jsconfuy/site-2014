exports.index = function(request, response) {
  response.render('admin/index.jade');
};

exports.speakers = function(request, response) {
  response.render('admin/speakers.jade');
};