const express = require('express');
const router = express.Router();

const attendanceController = require('../controllers/attendance.controller');

router.post('/attendances', attendanceController.insert);

router.get('/attendances', attendanceController.list);

router.get('/attendances/:id', attendanceController.getById);

router.put('/attendances/:id', attendanceController.update);

router.delete('/attendances/:id', attendanceController.remove);

module.exports = router;