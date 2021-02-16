const Barnd = require('../../models/brand.model');

module.exports.load = async function(req, res, next) {
    try {
        
        const { userId } = req.query;

        const isExistBarnd = await Barnd.find({ userId });
    
        if (!isExistBarnd)
          return res.status(401).json({ msg: "ไม่พบ Barnd" });
    
        return res.status(200).json(isExistBarnd);


    } catch (error) {
        next(error);
    }
}