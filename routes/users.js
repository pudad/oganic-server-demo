const express = require('express');
const router = express.Router();
const { loadAllUsers, createUser } = require("../controller/users.controller");
const { uploadImageProfile } = require("../middleware/multer");
const { checkDataSignUp } = require("../middleware/userValidator");

/* GET users listing. */
router.get("/", loadAllUsers);
router.post("/", [checkDataSignUp, uploadImageProfile.single("imageFile")], createUser);

module.exports = router;