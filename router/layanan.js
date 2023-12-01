const express = require('express');
const router = express.Router();
router.use(express.json());
const layananController = require('../controller/layanan')

router.get('/api/getlayanan', layananController.getLayanan)
router.post('/api/postlayanan', layananController.createLayanan)

module.exports = router