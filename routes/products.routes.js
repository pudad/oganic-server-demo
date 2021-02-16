const express = require("express");
const router = express.Router();
const { createProduct, loadAllProducts, loadProduct } = require("../controller/product-controllers");
const { uploadImageProduct } = require('../middleware/multer');
const { isAdmin } = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')

// create product item
router.post("/", [checkLogin, isAdmin], uploadImageProduct.array('imagesFile', 4), createProduct);

// load products
router.get("/", loadAllProducts);

// load product
router.get('/:id', [checkLogin, isAdmin], (loadProduct))


module.exports = router;