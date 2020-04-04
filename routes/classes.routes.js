const express = require('express')
const router = express.Router()

const classController = require('../controllers/classes.controller')


router.get('/class', classController.list);
router.post('/class', classController.insert)

module.exports = router;