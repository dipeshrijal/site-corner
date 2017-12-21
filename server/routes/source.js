const Source = require('../controller/source');

module.exports = function (router) {
  router.get('/api/sources', Source.get);
  router.post('/api/sources', Source.create);
};
