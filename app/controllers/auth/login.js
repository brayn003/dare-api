const User = require('~models/User');

async function controller(req, res) {
  console.log('her', req.body);
  const { username, password } = req.body;
  const token = await User.authenticate(username, password);
  return res.json({ token });
}

module.exports = controller;
