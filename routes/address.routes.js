const express = require('express');
const router = express.Router();
const address = require('../controller/address-controllers');

router.post('/:userId', address.createAddress)
router.get('/:userId', address.loadAddress)
router.put('/:userId', address.delete);

router.get('/', address.loadAddresses);


module.exports = router;