const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true,
  },
  imageURL: {
    type: 'string',
    required: true,
  },
}, {
  collection: 'interest',
  userAudits: true,
  timestamps: true,
});

module.exports = mongoose.model('Interest', InterestSchema);
