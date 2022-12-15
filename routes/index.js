const express = require('express');
const router = express.Router();
const loginRoutes = require('./login');
const mainRoutes = require('./main');

router.use('/login', loginRoutes)
router.use('/main', mainRoutes)

module.exports = router;