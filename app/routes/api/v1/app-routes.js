const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // Interest
  'post   /daresCompleted     darescompleted/daresCompleted',

  // subscribe
  'post    /subscribe                subscription/createOne',


  // Interest
  'get     /interest                  interest/getInterests',
  'post    /interest                  interest/createInterest',

  // Dare
  'post    /dares                     dare/createDare',
  'get     /dares                     dare/getDare',
  'get     /dare/:id                  dare/one',
];


module.exports = declareApiRoutes(routes);
