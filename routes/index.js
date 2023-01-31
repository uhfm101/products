var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products/profile/:id', productController.renderProfile)
router.get('/products/edit/:id', productController.renderEditForm)

router.post('/products/edit/:id', productController.updateProduct)

module.exports = router;
