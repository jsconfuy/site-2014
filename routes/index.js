exports.init = function (app) {

  app.get('/', function (req, res) {
    res.render('index', {});
  });

  app.get('/proposals', function (req, res) {
    res.render('proposals', {});
  });

  app.post('/proposals', function (req, res) {
    var Proposal = require('models/proposal');
    proposal = new Proposal();
    res.send(proposal);
  });
};
