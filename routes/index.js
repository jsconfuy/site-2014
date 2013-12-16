exports.init = function (app) {

  app.get('/', function (req, res) {
    res.render('index', {});
  });

  app.get('/proposals', function (req, res) {
    res.render('proposals', {});
  });

  app.post('/proposals', function (req, res) {
    var Proposal = require('../models/proposal');
    
    req.assert('topic', 'required').notEmpty();
    req.assert('summary', 'required').notEmpty();
    req.assert('name', 'required').notEmpty();
    req.assert('email', 'A valid email is required').isEmail();
    req.sanitize('companyPays').toBoolean();
    req.assert('residence').isAlpha();

    var errors = req.validationErrors(true);
    console.log(req.body);
    if (!errors) {
      proposal = new Proposal(req.body);
      proposal.save();
      res.send(200);    
    } else {
      res.render('proposals', {errors: errors});
    }
  });
};
