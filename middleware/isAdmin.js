module.exports.isAdmin = async function(req, res, next) {
    try {
        const isAdmin = req.user.isAdmin;
        if (isAdmin === true) return next();
        if (isAdmin === false) {
            const err = new Error(`ผู้ใช้งานอีเมล์ ${req.user.email} ไม่ได้รับสิทธิ์ เข้าได้เฉพาะ Admin เท่านั้น`);
            err.statusCode = 403;
            throw err;
        }
    } catch (error) {
        next(error);
    }

}