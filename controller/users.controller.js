const { createUser } = require('./user/createUser');
const { login } = require('./user/login');
const { updatePassword } = require('./user/updatePassword');
const { loadUser } = require('./user/loadUser');
const { loadAllUsers } = require('./user/loadAllUsers');

module.exports = {
    // ดึง users ทั้งหมด
    loadAllUsers,

    // ดึงข้อมูล user จาก userId
    loadUser,

    // สร้าง user
    createUser,

    // ลงชื่อเข้าใช้งาน
    login,

    // เปลี่ยนรหัสผ่าน
    updatePassword
}