const Users = require('../../models/users.model');
const { encode } = require('../../utility/password');
const { validationResult } = require("express-validator");


module.exports.createUser = async function(req, res, next) {
        try {

            // console.log(req.body)
            // return
           
            // // 1.เช็คข้อมูลจากผู้ใช้่ว่า ส่งมาครบและถูกต้องไหม
            const error = validationResult(req.body);
            if (!error.isEmpty()) {
                const err = new Error('ผิดพลาด!!!');
                err.statusCode = 402;
                err.validation = error.array();
                throw err;
            }
            
            // // 2.ดูว่ามีผู้ใช้อยู่ในระบบไหม
            const { username, password, email} = req.body;
            const user = await Users.findOne({ email });

            // // 3.ถ้ามี แจ้งผู้ใช้
            if (user) {
                const err = new Error('อีเมล์นี้ใช้งานแล้ว');
                err.statusCode = 402;
                err.validation = error.array();
                throw err;
            }
            // 4.ถ้าไม่มี สร้งผู้ใช้งาน

            const newUser = {
                imageUrl: `http://localhost:3000/images/profile/${req.file.filename}`,
                email,
                username,
                password: await encode(password)
            }
            const addUser = new Users(newUser);
            await addUser.save();
            return res.status(200).json({ "msg": "ลงทะเบียบเรียบร้อย"});

            
        } catch (error) {
            next(error);
        }
    }
