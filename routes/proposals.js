var Proposal = require('../models/proposal');

exports.index = function(request, response) {
  Proposal.find({active: true}, function (err, proposals) {
    if (err) {
      request.flash('error', 'There was an error retriving proposals');
      response.redirect('/admin/proposals');
    } else {
      response.render('proposals/index.jade', {proposals: proposals});
    }
  });
};

exports.new = function(request, response) {
  response.render('proposals/new.jade');
};

exports.create = function(request, response) {
  var proposal = new Proposal(request.param('proposal'));
  proposal.save(function(err){    
    if(err) {
      response.render('proposals/new.jade', {error: err});      
    } else {
      request.flash('info', 'The proposal has been submited correctly, thanks!');
      response.redirect('/');
    }
  });
};

exports.show = function(request, response) {
  Proposal.findById(request.param('id'), function (err, proposal) {
    if (err) {
      request.flash('error', 'There is no such proposal in the database');
      response.redirect('/admin/proposals');
    } else {
      response.render('proposals/show.jade', {proposal: proposal});
    }
  });
};

exports.destroy = function(request, response) {
  Proposal.findOneAndUpdate({_id: request.param('id')}, {active: false}, function(err){
    if(err) {
      request.flash('error', 'There was an error removing the proposal');
    } else {
      request.flash('info', 'Proposal was correctly removed');
    }
    response.redirect('/admin/proposals');
  });
};