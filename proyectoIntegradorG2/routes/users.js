const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/login', userController.login),

router.post('/login', userController.procesarLogin),

router.get('/register', userController.register),

router.post('/register', userController.procesarRegister)

router.get('/profile', userController.profile),

router.get('/profile-edit', userController.profileEdit),


module.exports = router;