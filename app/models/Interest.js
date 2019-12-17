const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
  Interest: {
    type: 'string',
    required: true,
    unique: true,
  },
  ImageURL: {
    type: 'string',
    required: true,
    unique: true,
  },
}, {
  collection: 'Interest',
  userAudits: true,
  timestamps: true,
});

module.exports = mongoose.model('Interest', InterestSchema);
