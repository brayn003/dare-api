const DaresCompleted = require('../../models/DaresCompleted');

const { ValidationError } = require('../../helpers/extended-errors');

module.exports = async (req, res) => {
  const { params } = req;
  const { dareId, id } = params;
  if (!dareId) throw new ValidationError('Dare Id is required');
  if (!id) throw new ValidationError('Id is required');
  const accepted = await DaresCompleted.findByIdAndUpdate(id, req.body);
  res.status(200).json(accepted);
};
