const Barnd = require('../../models/brand.model');

module.exports.create = async function(req, res, next) {
    try {
        
        const { brandName, brandCode } = req.body;
        const { userId } = req.query;

        const isExistBrand = await Barnd.find({userId, brandName});
        
        if (isExistBrand.length > 0 ) return res.status(401).json({ "msg": `มี Brand - ${brandName} แล้ว`});


        const newBran = {
            brandName,
            brandCode,
            userId,
            imageUrl: `http://localhost:3000/images/category/${userId}/${req.file.filename}`
        }

        new Barnd(newBran).save(null, () => {
            return res.status(200).json({ "msg": `สร้าง Brand - ${brandName} แล้ว`});
        });



    } catch (error) {
        next(error);
    }
}