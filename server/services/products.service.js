

class ProductsService {
  dbUrl = global.DB_URL;

  async getProducts() {
    const data = require('../db/DATA.json');

    return new Promise(resolve => setTimeout(() => resolve(data), 1000));
  }
}

module.exports = new ProductsService();
