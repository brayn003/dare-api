const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // admins
  'get    /get-admins       admin/find',

  // users
  'get    /user/me          user/me',
  'get    /users            user/find',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // Interest
  'post   /interest         interest/createInterest',
];

module.exports = declareApiRoutes(routes);
