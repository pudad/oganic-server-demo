const express = require('express');
const router = express.Router();
const { loadAllUsers, createUser, login, updatePassword, loadUser } = require("../controller/users.controller");
const { uploadImageProfile } = require("../middleware/multer");
const { checkDataSignUp, checkDataUpdatePassword, checkDataSignIn } = require("../middleware/userValidator");
const { checkLogin } = require("../middleware/passport");
const { isAdmin } = require("../middleware/isAdmin");

/* GET users listing. */
router.get("/", loadAllUsers);
router.post("/", [checkDataSignUp, uploadImageProfile.single("imageFile")], createUser);

router.get("/:userId", [checkLogin, isAdmin], loadUser)
router.put("/:userId", [checkDataUpdatePassword, checkLogin, isAdmin], updatePassword);

router.post("/login", [checkDataSignIn], login);

module.exports = router;