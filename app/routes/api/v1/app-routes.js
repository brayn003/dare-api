const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // Interest
  'post   /daresCompleted     darescompleted/daresCompleted',
  // 'post   /interest     interest/createOne',

  // subscribe
  'post    /subscribe                subscription/createOne',


  // Interest
  'get   /interest                  interest/getInterests',
];


module.exports = declareApiRoutes(routes);
