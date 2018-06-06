const router = require('express').Router();
const path = require('path');

router.all('*', function (request, response) {
    response.sendFile(path.resolve('dist/teamManager/index.html'));
});

module.exports = router;
