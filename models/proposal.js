var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jsconfuy');

var Schema = mongoose.Schema;

var proposalSchema = new Schema({
  topic: {type: String, required: true},
  summary: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  residence: {type: String, required: true},
  companyPays: Boolean,
  notes: {type: String, required: true},
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Proposal', proposalSchema);
