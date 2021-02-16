const express = require('express');
const router = express.Router();
const { create } = require('../controller/orders-controllers');
const { isAdmin } = require('../middleware/isAdmin');
const { checkLogin } = require('../middleware/passport')

router.post('/', create)

module.exports = router;