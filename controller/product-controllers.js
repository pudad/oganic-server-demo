const { createProduct } = require('./product/createProduct');
const { loadAllProducts } = require('./product/loadAllProduct');
const { loadProduct } = require('./product/loadProduct');


module.exports = {
    createProduct,
    loadAllProducts,
    loadProduct
}