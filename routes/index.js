exports.init = function (app) {

  app.get('/', function (req, res) {
    res.render('index', {});
  });

  app.get('/proposals', function (req, res) {
    res.render('proposals', {});
  });
  
  app.get('/faq', function (req, res) {
    res.render('faq', {});
  });

  app.post('/proposals', function (req, res) {
    var Proposal = require('../models/proposal');

    req.assert('topic', 'Topic is required.').notEmpty();
    req.assert('summary', 'Summary is required.').notEmpty();
    req.assert('name', 'Name is required.').notEmpty();
    req.assert('email', 'A valid email is required.').isEmail();
    req.assert('residence', 'Residence is required.').notEmpty();
    req.sanitize('companyPays').toBoolean();

    var errors = req.validationErrors(true);

    if (!errors) {
      proposal = new Proposal(req.body);
      proposal.save();
      res.redirect('/thanks');
    } else {
      res.render('proposals', {errors: errors});
    }
  });

  app.get('/thanks', function (req, res) {
    res.render('thanks', {});
  });
};
