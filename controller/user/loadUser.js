const Users = require('../../models/users.model');

module.exports.loadUser = async function(req, res, next) {
    try {
        // 1.ค้นหาว่ามีีผู้ใช้ไหม
        const { userId } = req.params;
        const user = await Users.findOne({ _id: userId });
        // 2.ถ้าไม่มีแจ้งผิดพลาด
        if (!user) return res.status(401).json({ "msg":"ไม่พบผู้ใช้" });
        // 3.ถ้ามี ส่งคืนข้อมูลผู้ใช้
        const myUser = {
            isAdmin: user.isAdmin,
            email: user.email,
            username: user.username
        }
        return res.status(200).json(myUser);

        
    } catch (error) {
        next(error);
    }
}