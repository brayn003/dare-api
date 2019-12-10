const { getSignedUrl } = require('~/helpers/upload-service');
const Media = require('~models/Media');

const controller = async (req, res) => {
  const { query } = req;
  const urls = await getSignedUrl(query.name);
  const media = await Media.createOne({
    name: urls.readUrl.substring(urls.readUrl.lastIndexOf('/') + 1),
    url: urls.readUrl,
  });
  return res.status(201).json({
    ...media.toJSON(),
    signedUrl: urls.writeUrl,
  });
};

module.exports = controller;
