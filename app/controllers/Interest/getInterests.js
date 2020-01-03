const Interest = require('~models/Interest');

const controller = async (req, res) => {
  const { params } = req;
  const Interests = await Interest.getInterest(params);
  return res.json(Interests);
};

module.exports = controller;
