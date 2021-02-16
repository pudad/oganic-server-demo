const express = require('express');
const router = express.Router();
const { loadAllUsers, createUser } = require("../controller/users.controller");

/* GET users listing. */
router.get("/", loadAllUsers);
router.post("/", createUser);

module.exports = router;