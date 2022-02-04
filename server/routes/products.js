const {Router} = require('express');
const router = Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.getProducts);

module.exports = router;
