const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 
/* Importaciones */
let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination :(req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/products'));
    },
    filename : (req, file, cb) => {
            //      ejemplo de como va a quedar el nombre: fotoPerfil-243534534534.png
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage : storage})

/* GET home page. */
router.get('/id/:id', productController.detail),

router.get('/add', productController.add),
router.post('/store', upload.single("imgProduct"), productController.store),

router.get('/product-edit/id/:id', productController.edit),
router.post('/product-edit/id/:id', productController.updateProd);


router.get('/delete/:id', productController.destroy)

module.exports = router;