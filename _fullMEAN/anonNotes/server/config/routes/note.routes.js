const noteController = require('../../controllers/notes');

const router = require('express').Router();
console.log('ROUTER in server->config->routes->note.routes.js');

router
  .get('/', noteController.index)
  .post('/', noteController.create)
  // .get('/:_id', noteController.show)
  // .put('/:_id', noteController.update)
  // .delete('/:_id', noteController.destroy)

  // I believe the line below would be an alternative to including the file -- catch-all.route.ts
/*   .all('*', function(request, response, next) {
    response.sendFile(path.resolve('./dist/anonNotes/index.html'))
}) */

module.exports = router;



