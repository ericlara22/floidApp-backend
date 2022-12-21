const express = require('express');
const router = express.Router();
const loginRoutes = require('./loginRoutes');
const productRoutes = require('./productRoutes');

router.use('/login', loginRoutes)
router.use('/products', productRoutes)

module.exports = router;