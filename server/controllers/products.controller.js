const productsService = require('../services/products.service');

class ProductsController {
  async getProducts(req, res) {
    const products = await productsService.getProducts();

    res.json(products);
  }
}

module.exports = new ProductsController();
