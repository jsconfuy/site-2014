var User = require('../models/user');

exports.index = function(request, response) {
  User.find(function (err, users) {
    if (err) {
      request.flash('error', 'There was an unexpected error');
      response.redirect('/admin/users');
    } else {
      response.render('users/index.jade', {users: users});
    }
  });
};

exports.new = function(request, response) {
  response.render('users/new.jade');
};

exports.create = function(request, response) {
  var user = new User(request.param('user'));
  user.save(function(err) {
    if(err) {
      console.log(err);
      response.render('users/new.jade', {error: err});      
    } else {
      request.flash('info', 'The user has been created correctly, thanks!');
      response.redirect('/admin/users');
    }
  });
};

exports.edit = function(request, response) {
  User.findById(request.param('id'), function (err, user) {
    if (err) {
      request.flash('error', 'There is no such user in the database');
      response.redirect('/admin/users');
    } else {
      response.render('users/edit.jade', {user: user});
    }
  });
};

exports.update = function(request, response) {
  var userParams = request.param('user');

  User.findById(userParams.id, function (err, user) {
    if (err) { request.flash('error', 'There was an error retriving the user'); } 
    
    if(!user) { request.flash('error', 'There is no such user in the database'); }
    
    if(user) { 
      user.set(userParams);
      user.save(function(err) {
        if(err) {
          console.log(err);
          response.render('users/edit.jade', {user: user, error: err});
        } else { 
          request.flash('info', 'The user was correctly updated');
          response.redirect('/admin/users');
        }
      });
    }
  });
};

exports.destroy = function(request, response) {
  User.findOneAndUpdate({_id: request.param('id')}, {active: false}, function(err){
    if(err) {
      request.flash('error', 'There was an error removing the user');
    } else {
      request.flash('info', 'The user was correctly removed');
    }
    response.redirect('/admin/users');
  });
};