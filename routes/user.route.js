var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')
router.post('/users/authenticate', userController.authenticate);
router.get('/users', userController.list);
router.post('/user/exists', userController.check)
router.get('/user/:id', userController.findById)
router.post('/user', userController.insert)

module.exports = router;
