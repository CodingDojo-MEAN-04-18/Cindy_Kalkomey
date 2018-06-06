
const playerRouter = require('./player.routes');

const router = require('express').Router();

module.exports = router

  .use('/players', playerRouter);

