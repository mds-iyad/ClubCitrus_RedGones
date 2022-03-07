const express = require('express');
const router = express.Router();
const patientCtrl = require('../controllers/patient')
const Patient= require('../models/Patient');

router.post('/', patientCtrl.createPatient);
router.get('/', patientCtrl.getAllPatient);
router.put('/:id', patientCtrl.modifyPatient);
router.delete('/:id', patientCtrl.deletePatient);

module.exports = router;
module.exports = router;