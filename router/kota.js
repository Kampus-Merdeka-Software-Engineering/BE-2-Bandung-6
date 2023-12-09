const express = require('express');
const router = express.Router();
router.use(express.json());
const kotaController = require('../controller/kota')

router.get('/api/getkota', kotaController.getKotaTravel)
router.get('/id/:id', kotaController.getKotaTravelWithId)
router.post('/api/postkota', kotaController.createKotaTravel)
router.get('/:kotaAsal', kotaController.getKotaByAsal);

module.exports = router