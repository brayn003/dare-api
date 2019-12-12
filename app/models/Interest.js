const mongoose = require('mongoose');

const InterestsSchema = new mongoose.Schema({
  Interest: {
  type: 'string',
  required: true,
  unique: true
  }
}, {
  collection: 'Interest',
  userAudits: true,
  timestamps: true,
});

InterestsSchema.statics.createOne = async function () {
  const newInterest = 
}