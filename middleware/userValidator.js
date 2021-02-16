const { body } = require('express-validator');

module.exports = {
    checkDataSignUp: [
        body('username').not().notEmpty().withMessage("กรุณากรอก User Name"),
        body('email').not().notEmpty().withMessage('กรุณากรอก Email').isEmail().withMessage('รูปแบบ Email ไม่ถูกต้อง'),
        body('password').not().notEmpty().withMessage('กรุณากรอก Password').isLength({min: 6}).withMessage('ตั้ง Password อย่างน้อย 6 ตัวอักษร')
    ],
    checkDataSignIn: [
        body('email').not().notEmpty().withMessage('กรุณากรอก Email').isEmail().withMessage('รูปแบบ Email ไม่ถูกต้อง'),
        body('password').not().notEmpty().withMessage('กรุณากรอก Password').isLength({min: 6}).withMessage('ตั้ง Password อย่างน้อย 6 ตัวอักษร')
    ],

    checkDataUpdatePassword: [
        body('password').not().notEmpty().withMessage('กรุณากรอก Password').isLength({min: 6}).withMessage('ตั้ง Password อย่างน้อย 6 ตัวอักษร')
    ],
}