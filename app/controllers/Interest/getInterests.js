const Interest = require('~models/Interest');

const controller = async (req, res) => {
  const Interests = await Interest.find();
  return res.json(Interests);
};

module.exports = controller;
