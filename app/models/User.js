const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require('bcrypt-nodejs');
const omit = require('lodash/omit');

const { ValidationError } = require('../helpers/extended-errors');

const { createJWT } = require('../helpers/jwt-service');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  mobile: {
    type: String,
    // required: true,
    unique: true,
  },

  latitude: {
    type: Number,
    // required: true,
  },

  longitude: {
    type: Number,
    // required: true,
  },
}, {
  collection: 'user',
  timestamps: true,
  userAudits: true,
});

UserSchema.statics.authenticate = async function (username, password) {
  const user = await this.findOne({ username }).select('+password');
  if (!user) {
    throw new ValidationError('User does not exist');
  }
  const match = bcrypt.compareSync(password, user.password);
  if (!match) {
    throw new ValidationError('Password is incorrect');
  }
  const token = await createJWT(
    omit(user.toJSON(), ['password']),
    process.env.AUTH_SECRET,
    { expiresIn: '1d' },
  );
  return token;
};

UserSchema.statics.getUsers = async function (params) {
  const { email, name } = params;
  const criteria = {};
  if (email) criteria.email = { $regex: new RegExp(email, 'i') };
  if (name) criteria.name = { $regex: new RegExp(name, 'i') };
  const user = await this.paginate(criteria, { lean: true });
  return user;
};

UserSchema.statics.createOne = async function (params) {
  const user = await this.create(params);
  return omit(user.toJSON(), ['password']);
};

UserSchema.pre('save', async function (next) {
  const user = await this.constructor.findOne({ email: this.email });
  if (user) {
    throw new Error('User already exists');
  }
  this.password = bcrypt.hashSync(this.password);
  return next();
});

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);
