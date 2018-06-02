const  bookController = require('../../controllers');

const router = require('express').Router();

router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:bookID', bookController.show)
  .put('/:bookID', bookController.update)
  .delete('/:bookID', bookController.destroy);

module.exports = router;
