const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // subscribe
  'post   /subscribe                subscription/createOne',

  // // Interest
  // 'post   /interest     interest/createOne',

  // Interest
  'get   /interest                  interest/getInterests',
];


module.exports = declareApiRoutes(routes);
