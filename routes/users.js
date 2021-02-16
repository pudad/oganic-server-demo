const express = require('express');
const router = express.Router();
const { getUsers } = require("../controller/users.controller");

/* GET users listing. */
router.get("/", getUsers);

module.exports = router;