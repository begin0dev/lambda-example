const express = require('express');

const products = require('./products.ctrl');

const router = express.Router();

router.use('/products', products);

module.exports = router;
