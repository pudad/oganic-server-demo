const express = require('express');
const router = express.Router();
const { loadAllUsers } = require("../controller/users.controller");

/* GET users listing. */
router.get("/", loadAllUsers);

module.exports = router;