const productController = require('../../controllers/products');

const router = require('express').Router();
console.log('ROUTER in server->config->routes->product.routes.js');

router
  .get('/', productController.index)
  .post('/', productController.create)
  .get('/:_id', productController.show)
  .put('/:_id', productController.update)
  .delete('/:_id', productController.destroy)

module.exports = router;
