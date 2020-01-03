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
  'get     /interest                  interest/getInterests',

  // Dare
  'post    /dares                      dare/createDare',
  'get     /dares                     dare/list',
  'get     /dare/:id                  dare/one',
];


module.exports = declareApiRoutes(routes);
