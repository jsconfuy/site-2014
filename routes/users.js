var User = require('../models/user');

exports.new = function(request, response) {
  response.render('users/new.jade');
};

exports.create = function(request, response) {
  var user = new User(request.param('user'));
  user.save(function(err){    
    if(err) {
      response.render('users/new.jade', {error: err});      
    } else {
      request.flash('info', 'The proposal has been submited correctly, thanks!');
      response.redirect('/');
    }
  });
};

exports.show = function(request, response) {
  User.findById(request.param('id'), function (err, user) {
    if (err) {
      request.flash('error', 'There is no such user in the database');
      response.redirect('/');
    } else {
      response.render('users/show.jade', {user: user});
    }
  });
};

exports.index = function(request, response) {
  User.find({active: true}, function (err, users) {
    if (err) {
      request.flash('error', 'There was an error retriving users');
      response.redirect('/');
    } else {
      response.render('users/index.jade', {users: users});
    }
  });
}

exports.destroy = function(request, response) {
  User.findOneAndUpdate({_id: request.param('id')}, {active: false}, function(err){
    if(err) {
      request.flash('error', 'There was an error removing the user');
    } else {
      request.flash('info', 'User was correctly removed');
    }
    response.redirect('/users');
  });
};