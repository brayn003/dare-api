const User = require('../../models/User');

module.exports = async (req, res) => {
  const { username } = req.body;
  const user = await User.updateOne(userName, password);
};

module.exports = controllers;
