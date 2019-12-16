const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // users
  'get    /users                    user/find',
  'get    /user/me                  user/me',

  // upload
  'get    /upload/signed-url        upload/getSignedUrl',

  // Interest
  'post   /daresCompleted     darescompleted/daresCompleted',
  //Interest
<<<<<<< HEAD
  // 'post   /interest     interest/createOne',

  //Dare
  'post /dare            dare/createDare',
=======
  'get   /interest                  interest/getInterests',
>>>>>>> 0e2a52df87c3d0c7146fbb75736dd43c22c716d3
];


module.exports = declareApiRoutes(routes);
