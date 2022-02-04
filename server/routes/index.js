const productRoutes = require('./products');

const initRoutes = app => {
  app.use('/api/products', productRoutes)
};

module.exports = {
  initRoutes
};
