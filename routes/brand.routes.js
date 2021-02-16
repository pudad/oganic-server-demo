const express = require('express');
const router = express.Router();
const { create, load } = require('../controllers/brand-controllers');
const { uploadImageBrand } = require('../middleware/multer');
const { isAdmin } = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')

router.post('/', [checkLogin, isAdmin], uploadImageBrand.single('imageFile'), create)
router.get('/', load)

module.exports = router;