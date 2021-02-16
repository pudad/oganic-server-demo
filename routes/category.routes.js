const express = require('express');
const router = express.Router();
const { create, update, load } = require('../controller/category-controllers');
const { uploadImageCategory } = require('../middleware/multer');
const { isAdmin } = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')


router.post('/', [checkLogin, isAdmin], uploadImageCategory.single('imageFile'), create)
router.get('/', load)
router.patch('/', update)

module.exports = router;