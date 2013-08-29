exports.index = function(req, res){
  res.render('index');
};

exports.speakers = function(req, res) {
  res.render('speakers');
};

exports.proposals = function(req, res) {
  res.render('proposals');
};

exports.venue = function(req, res) {
  res.render('venue');
};