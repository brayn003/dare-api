const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // Interest
  'post   /daresCompleted     darescompleted/daresCompleted',

  // Interest
  'get   /interest                  interest/getInterests',
];


module.exports = declareApiRoutes(routes);
