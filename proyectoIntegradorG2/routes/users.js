const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: function (req, file, cb) {
        //      ejemplo de como va a quedar el nombre: fotoPerfil-243534534534.png
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage })

/* GET & POST users listing. */
router.get('/login', userController.login),

router.post('/login', userController.procesarLogin),

router.get('/register', userController.register),

router.post('/register', upload.single('imgRegister'), userController.procesarRegister)

router.get('/profile/:idUsuario', userController.profile),

router.post('/profile/:idUsuario', userController.follow),

router.post('/unfollow', userController.unfollow)

router.get('/profile-edit', userController.profileEdit),

router.post('/profile-edit', upload.single('imgPerfil'), userController.profileUpdate),

router.post('/logout', userController.logout),

module.exports = router;