const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexcontroller')

/* GET home page. */
router.get('/', indexController.index),
router.get('/search-results', indexController.searchResults),


module.exports = router;
