const express = require('express');
const router = express.Router();
//const authentication = require('../middlewares/authentication');
const {productController} = require('../controllers');

router.post('/', productController.getAllProducts );

module.exports = router;