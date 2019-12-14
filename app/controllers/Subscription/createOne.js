const Subscription = require('~models/Subscription');

const { ValidationError } = require('~helpers/extended-errors');

const controller = async (req, res) => {
  const { userId, interestId, ...rest } = req.body;

  if (!userId) {
    throw new ValidationError('The user_id does not exists');
  }
  if (!interestId) {
    throw new ValidationError('The interest_id does not exists');
  }

  const subscription = await Subscription.create({ userId, interestId, ...rest });
  res.json(subscription);
};

module.exports = controller;
