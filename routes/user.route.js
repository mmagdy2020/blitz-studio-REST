var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')
router.get('/users', userController.list);
router.post('/users/authenticate', userController.authenticate);
router.post('/users/exists', userController.check);
router.get('/users/:id', userController.findById);
router.delete('/users/:id', userController.deleteById);
router.patch('/users/:id', userController.update);
router.post('/users', userController.insert);

module.exports = router;