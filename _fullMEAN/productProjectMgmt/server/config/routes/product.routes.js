const productController = require('../../controllers/products');

const router = require('express').Router();
console.log('ROUTER in server->config->routes->product.routes.js');

router
  .get('/', productController.index)
  .post('/', productController.create)
  .get('/:_id', productController.show)
  .put('/:_id', productController.update)
  .delete('/:_id', productController.destroy)

  // I believe the line below would be an alternative to including the file -- catch-all.route.ts
/*   .all('*', function(request, response, next) {
    response.sendFile(path.resolve('./dist/productProjectMgmt/index.html'))
}) */

module.exports = router;



