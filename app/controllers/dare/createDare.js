const Dare = require('../../models/Dare');
// const Interest = require('../../models/Interest');


const controller = async (req, res) => {
  const { interestId, ...rest } = req.body;
  const dare = await Dare.create({ interestId, ...rest });
  return res.status(201).json(dare);
};
module.exports = controller;
