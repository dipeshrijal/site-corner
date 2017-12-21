const Source = require('../controller/source');

module.exports = function (router) {
  router.get('/api/sources', Source.get);
  router.post('/api/sources', Source.create);
  router.put('/api/sources/:id', Source.update);
  router.get('/api/sources/:id', Source.findOne);
  router.put('/api/sources/comments/:id', Source.updateComments);
};
