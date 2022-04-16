const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 

router.get('/detail/:id', productController.detail),

router.get('/add', productController.add),


module.exports = router;