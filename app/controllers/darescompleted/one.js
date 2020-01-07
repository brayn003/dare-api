const DaresCompleted = require('../../models/DaresCompleted');

module.exports = async (req, res) => {
  const { params } = req;
  const { id } = params;
  const darecompleted = await DaresCompleted.findById(id);
  res.status(200).json(darecompleted);
};
