const mongoose = require('mongoose');

const User = require('./User');
const Dare = require('./Dare');

const DaresCompletedSchema = new mongoose.Schema({

  userId: { type: 'ObjectId', ref: User, required: true },
  dareId: { type: 'ObjectId', ref: Dare, required: true },
  imageUrl: 'String',
  longitude: 'Number',
  latitude: 'Number',
  completed: { type: 'Boolean', default: false },


}, {
  collection: 'dares_completed',
  timestamps: true,
  userAudits: true,
});


module.exports = mongoose.model('DaresCompleted', DaresCompletedSchema);
