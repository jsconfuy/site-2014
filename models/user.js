var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  role: { type: String, required: true },
  active: { type: Boolean, default: true },
  firstName: {type: String },
  lastName: {type: String },
  email: {type: String },
  passwordConfirmation: {}
});

userSchema.path('role').validate(function (value) {
  return /admin|speaker/i.test(value);
}, 'The role should be admin or speaker');

userSchema.path('passwordConfirmation').validate(function (value) {
  return this.password == value;
}, 'Password doesn\'t match');

userSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.isAdmin = function() {
  return this.role == 'admin';
};

userSchema.methods.isSpeaker = function() {
  return this.role == 'speaker';
};

module.exports = mongoose.model('User', userSchema);