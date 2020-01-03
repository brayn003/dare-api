const Dare = require('../../models/Dare');
// const Interest = require('../../models/Interest');

const controller = async (req, res) => {
  console.log('hello');
  const { id } = req.params;
  const dare = await Dare.findById(id);
  return res.status(200).json(dare);
};
module.exports = controller;
