const DaresCompleted = require('../../models/DaresCompleted');

const { ValidationError } = require('../../helpers/extended-errors');

module.exports = async (req, res) => {
  const { params, user } = req;
  const { dareId } = params;
  if (!dareId) throw new ValidationError('Dare Id is required');
  const accepted = await DaresCompleted.create({ userId: user.id, dareId });
  res.status(201).json(accepted);
};
