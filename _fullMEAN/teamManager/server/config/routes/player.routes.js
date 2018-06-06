const playerController = require('../../controllers/players');

const router = require('express').Router();
console.log('ROUTER in server->config->routes->player.routes.js');

router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .get('/:_id', playerController.show)
  .put('/:_id', playerController.update)
  .delete('/:_id', playerController.destroy)

  // I believe the line below would be an alternative to including the file -- catch-all.route.ts
/*   .all('*', function(request, response, next) {
    response.sendFile(path.resolve('./dist/productProjectMgmt/index.html'))
}) */

module.exports = router;
