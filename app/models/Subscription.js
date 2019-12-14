const mongoose = require('mongoose');
const Interest = require('./Interest');
const User = require('./User');

const SubscriptionSchema = new mongoose.Schema({
  interestId: {
    type: 'ObjectId',
    ref: Interest,
  },
  userId: {
    type: 'ObjectId',
    ref: User,
    required: true,
  },
  subscribed: {
    type: 'Boolean',
    default: false,
  },
}, {
  collection: 'subscription',
  timestamps: true,
  userAudits: true,
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
