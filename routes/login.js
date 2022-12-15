const express = require('express');
const router = express.Router();
const {loginController} = require('../controllers')

router.get('/', (req, res) => res.send('Hi'));
router.post('/', loginController.login );


module.exports = router;