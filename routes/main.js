const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication');
const {mainController} = require('../controllers');

router.get('/', authentication, mainController.getAll );

module.exports = router;