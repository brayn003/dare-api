const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',
 
  

  //Interest
  // 'post   /interest     interest/createOne',

  //Dare
  'post /dare            dare/createDare',
];


module.exports = declareApiRoutes(routes);
