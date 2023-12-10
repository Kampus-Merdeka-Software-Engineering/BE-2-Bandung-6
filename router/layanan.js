const express = require('express');
const router = express.Router();
router.use(express.json());
const layananController = require('../controller/layanan')

router.get('/getlayanan', layananController.getLayanan)
router.get('/api/:id', layananController.getLayananWithId)
router.post('/api/postlayanan', layananController.createLayanan)
router.get('/cari', layananController.getByFilter);
router.get('/:kotaAsal', layananController.getLayananByAsal)

module.exports = router