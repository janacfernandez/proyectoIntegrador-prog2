const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 

router.get('/id/:id', productController.detail),

router.get('/add/', productController.add),
router.post('/add/', productController.procesarAdd),

router.get('/product-edit', productController.edit),
router.post('/product-edit', productController.updateAdd), 

router.get('/deleteProduct/:id', productController.destroy)
/* Importaciones */
let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename : function(req, file, cb) {
            //      ejemplo de como va a quedar el nombre: fotoPerfil-243534534534.png
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage : storage})


/* GET & POST users listing. */
router.get('/detail/:id', productController.detail),
router.get('/add', productController.add),
router.post('/add', productController.procesarAdd),
router.post('/add', upload.single('imgProducto'), productController.updateAdd)
router.post('/detail/:id', productController.comentarios) // ver
// falta ruta de procesarAdd 


module.exports = router;