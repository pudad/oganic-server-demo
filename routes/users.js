const express = require('express');
const router = express.Router();
const { loadAllUsers, createUser } = require("../controller/users.controller");
const { uploadImageProfile } = require("../middleware/multer");
const { checkDataSignUp } = require("../middleware/userValidator");
const { checkLogin } = require("../middleware/passport");
const { isAdmin } = require("../middleware/isAdmin");

/* GET users listing. */
// router.get("/", loadAllUsers);
// router.post("/", [checkDataSignUp, uploadImageProfile.single("imageFile")], createUser);

router
    .route("/")
    .post([checkDataSignUp, uploadImageProfile.single("imageFile")], users.createUser)
    .get([checkLogin, isAdmin], users.loadAllUsers);

module.exports = router;