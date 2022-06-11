const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 

router.get('/id/:id', productController.detail),

router.get('/add/', productController.add),
router.post('/add/', productController.procesarAdd),

router.get('/product-edit/:id', productController.edit),
router.post('/product-edit/:id', productController.updateAdd), 

router.get('/deleteProduct/:id', productController.destroy)


module.exports = router;