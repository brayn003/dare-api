const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // dares -completed
  'get    /dare/:id                 darescompleted/one',
  'post   /dare/:dareId/accept          darescompleted/accepted',
  'post   /dare/:dareId/complete/:id    darescompleted/complete',

  // subscribe
  'post    /subscribe               subscription/createOne',


  // Interest
  'get     /interests               interest/getInterests',
  'post    /interest                interest/createInterest',

  // Dare
  'post    /dare                    dare/createDare',
  'get     /dares                   dare/getDare',
  'get     /dare/:id                dare/one',
];


module.exports = declareApiRoutes(routes);
