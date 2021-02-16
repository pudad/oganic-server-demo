const Users = require('../../models/users.model');
const { encode } = require('../../utility/password');
const { validationResult } = require("express-validator");

module.exports.updatePassword = async function(req, res, next) {
    try {

        // // 1.เช็คข้อมูลจากผู้ใช้่ว่า ส่งมาครบและถูกต้องไหม
        const error = validationResult(req);
        if (!error.isEmpty()) {
            const err = new Error('ผิดพลาด!!!');
            err.statusCode = 402;
            err.validation = error.array();
            throw err;
        }

        const {userId} = req.params;
        const user = await Users.findById(userId);

        if (!user) return res.status(401).json({ "msg":"ไม่พบผู้ใช้งาน" });

        const { password } = req.body;
        const newPassword = await encode(password);

        const i = await Users.findOneAndUpdate({ _id: userId}, { password: newPassword });
        return res.status(200).json({ "msg":"เปลี่ยนรหัสผ่านแล้ว" });
    } catch (error) {
        next(error);
    }
}