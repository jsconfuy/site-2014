var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proposalSchema = new Schema({
  topic: {type: String, required: true},
  summary: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  twitterUrl: String,
  githubUrl: String,
  blogUrl: String,
  residence: {type: String, required: true},
  companyPays: Boolean,
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Proposal', proposalSchema);