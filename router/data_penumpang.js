const express = require('express');
const router = express.Router();
router.use(express.json());
const datapenumpangController = require('../controller/data_penumpang')

router.get('/api/getdatapenumpang', datapenumpangController.getDataPenumpang)
router.get('/:id', datapenumpangController.getDataPenumpangWithId)
router.post('/api/postdatapenumpang',datapenumpangController.createDataPenumpang)

module.exports = router