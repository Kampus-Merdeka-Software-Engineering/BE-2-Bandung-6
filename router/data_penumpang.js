const express = require('express');
const router = express.Router();
router.use(express.json());
const datapenumpangController = require('../controller/data_penumpang');

router.get('/api/getdatapenumpang', datapenumpangController.getDataPenumpang);
router.get('/id/:id', datapenumpangController.getDataPenumpangWithId);
router.get('/:alamatEmail', datapenumpangController.getDataByEmail);
router.post('/api/postdatapenumpang', datapenumpangController.createDataPenumpang);

module.exports = router;
