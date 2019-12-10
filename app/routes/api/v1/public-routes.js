const { declareApiRoutes } = require('~helpers/route-service');

const routes = [
  // public auth
  'post   /auth/register        auth/register',
  'post   /auth/login           auth/login',
  'post   /auth/verify-token    auth/verifyToken',

  // admin auth
  'post   /admin-auth/login          admin/login',
  'post   /admin-auth/verify-token   admin/verifyToken',
  'post   /admin-auth/add-admin      admin/add',

];

module.exports = declareApiRoutes(routes);
