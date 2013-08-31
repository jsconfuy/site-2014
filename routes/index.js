exports.index = function(req, res){
  res.render('index');
};

exports.speakers = function(req, res) {
  res.render('speakers');
};

exports.venue = function(req, res) {
  res.render('venue');
};