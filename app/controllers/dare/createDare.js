const Dare = require('../../models/Dare');
// const Interest = require('../../models/Interest');


const controller = async (req, res) => {
  const { body } = req;
  console.log(body);
  const dare = await Dare.create(body);
  console.log(dare);
  return res.status(201).json(dare);
};
module.exports = controller;
