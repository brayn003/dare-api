const Dare = require('../../models/Dare');
// const Interest = require('../../models/Interest');

const controller = async (req, res) => {
  const darelist = await Dare.find();
  return res.status(200).json(darelist);
};
module.exports = controller;
