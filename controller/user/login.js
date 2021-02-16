const Users = require("../../model/users.model");
const { validationResult } = require("express-validator");
const { decode } = require("../../utility/password");
const jwt = require("jsonwebtoken");
const configs = require("../../configs/main");

module.exports.login = async function(req, res, next) {
    try {
        // 1.เช็คข้อมูลจากผู้ใช้่ว่า ส่งมาครบและถูกต้องไหม
        const error = validationResult(req);
        if (!error.isEmpty()) {
            const err = new Error("ผิดพลาด!!!");
            err.statusCode = 402;
            err.validation = error.array();
            throw err;
        }

        // 2.ค้าหาว่ามีผู้ใช้ตรงกับอีเมล์ที่ส่งมาไหม
        const { email, password } = req.body;
        const user = await Users.findOne({ email });


        // 3.ถ้าไม่มี แจ้งผู้ใช้
        if (!user) {
            const err = new Error("ไม่พบผู้ใช้งานนี้ในระบบ!!!");
            err.statusCode = 404;
            err.validation = error.array();
            throw err;
        }

        // 4.ถ้ามี เช็ครหัสผ่านว่าตรงกันไหม
        const isSamPassword = await decode(password, user.password);
        // 4.1ถ้ารหัสผ่านไม่ถูกต้อง
        if (!isSamPassword) {
            const err = new Error("รหัสผ่านไม่ถูกต้อง");
            err.validation = error.array();
            err.statusCode = 401;
            throw err;
        }

        // 4.2ถ้ารหัสผ่านถูกต้อง
        // สร้าง Token กำหนดวันหมดอายุ
        const token = await jwt.sign({ userId: user._id, email: user.email, isAdmin: user.isAdmin },
            configs.SECRET_KEY, { expiresIn: "1h" }
        );
        const exp = await jwt.decode(token).exp;

        return res.status(200).json({
            token,
            exp,
            userId: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            imageUrl: user.imageUrl,
        });
    } catch (error) {
        next(error);
    }
};