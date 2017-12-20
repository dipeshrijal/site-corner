const User = require('../controller/auth');

module.exports = function (router) {
  router.post('/api/authenticate', User.authenticate);
};
