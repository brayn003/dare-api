const mongoose = require('mongoose');
const Interest = require('./Interest');
const User = require('./User');

const SubscriptionSchema = new mongoose.Schema({
  interestId: {
    type: 'OjectId',
    ref: Interest,
  },
  userId: {
    type: 'OjectId',
    ref: User,
    required: true,
  },
  subscribed: {
    type: 'Boolean',
    default: false,
  },
}, {
  collection: 'subcription',
  timestamps: true,
  userAudits: true,
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
