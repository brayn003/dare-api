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

  // 'post   /interest     interest/createOne',

  // Dare
  'post    /dares                      dare/createDare',

  'get     /interest                  interest/getInterests',

];


module.exports = declareApiRoutes(routes);
