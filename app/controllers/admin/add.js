const Admin = require('../../models/Admin');

module.exports = async (req, res) => {
  const { user = {} } = req;
  const { userId } = req.body;
  const admin = await Admin.addOne(userId, user.id);
  return res.status(201).json(admin);
};
