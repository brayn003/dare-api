const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',
  'patch  /user/update              user/username',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // Interest
  'post   /daresCompleted     darescompleted/daresCompleted',

  // Interest
  'get     /interest                  interest/getInterests',

  // Dare
  'post    /dares                      dare/createDare',


];


module.exports = declareApiRoutes(routes);
