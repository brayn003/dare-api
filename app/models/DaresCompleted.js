const mongoose = require('mongoose');

const User = require('./User');
const Dare = require('./Dare');

const DaresCompletedSchema = ({

  userId: { type: 'ObjectId', ref: User, required: true },
  dareId: { type: 'ObjectId', ref: Dare, required: true },
  imageUrl: { type: 'String' },
  longitude: { type: 'Number', required: true },
  latitude: { type: 'Number', required: true },


}, {
  collection: 'dares_completed',
  timestamps: true,
  userAudits: true,
});



module.exports = mongoose.model('Dares_Completed', DaresCompletedSchema);
