var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')
router.get('/users', userController.list);

router.post('/user/authenticate', userController.authenticate);
router.post('/user/exists', userController.check);
router.get('/user/:id', userController.findById);
router.delete('/user/:id', userController.deleteById);
router.post('/user', userController.insert);
router.patch('/user', userController.update);

module.exports = router;
