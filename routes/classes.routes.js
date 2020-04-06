const express = require('express')
const router = express.Router()

const classController = require('../controllers/classes.controller')

// MO - changing naming Convention as requested..
router.get('/classes', classController.list);  
router.post('/classes', classController.insert)

router.get('/classes/:classId',classController.getById)
router.patch('/classes/:classId', classController.updateById);
router.delete('/classes/:classId', classController.deleteById);


module.exports = router;