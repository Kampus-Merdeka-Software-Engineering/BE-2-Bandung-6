const express = require('express');
const router = express.Router();
const controller = require('../controller/index');

// router customer
router.get('/', controller.customer.getAll);



module.exports = router;