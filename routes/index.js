exports.init = function (app) {

  app.get('/', function (req, res) {
    res.render('index', {});
  });

  app.get('/proposals', function (req, res) {
    res.render('proposals', {});
  });

};
