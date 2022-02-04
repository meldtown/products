class ProductsService {
  async getProducts() {
    const data = require('../db/DATA.json');
    // Since "Name" field is absent in product DTO, it will be added dynamically to conform test task requirements
    const normalizedData = data.map((product, index) => ({Name: `Product ${index + 1}`, ...product}));

    // Simulate http request with delay of 1 second
    return new Promise(resolve => setTimeout(() => resolve(normalizedData), 1000));
  }
}

module.exports = new ProductsService();
