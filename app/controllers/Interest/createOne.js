const Interest = require('~models/Interest');

const controller = async (req, res) => {
  const interest = await Interest.create(req.body);
  res.send(interest);
};

module.exports = controller;
