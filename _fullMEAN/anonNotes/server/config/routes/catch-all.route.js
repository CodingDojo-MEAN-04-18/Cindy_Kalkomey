const router = require('express').Router();
const path = require('path');

router.all('*', function (request, response) {
    response.sendFile(path.resolve('dist/anonNotes/index.html'));
});

module.exports = router;
