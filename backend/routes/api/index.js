const router = require('express').Router();

const sessionRouter = require('./session.js');
router.use('/session', sessionRouter);

const usersRouter = require('./users.js');
router.use('/users', usersRouter);

const productsRouter = require('./products.js');
router.use('/products', productsRouter )


module.exports = router;