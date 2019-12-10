const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
}, {
  collection: 'media',
  userAudits: true,
  timestamps: true,
});

MediaSchema.statics.createOne = async function (mediaBody) {
  const media = await this.create(mediaBody);
  return media;
};

module.exports = mongoose.model('Media', MediaSchema);
