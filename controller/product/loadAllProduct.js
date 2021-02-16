const Products = require('../../models/products.model');

module.exports.loadAllProducts = async function(req, res, next) {
    try {
        
        let { page, per_Page = 10 } = req.query;



        const products = await Products.find().skip((+page - 1) * per_Page).limit(+per_Page);
        const totalProducts = await Products.find().countDocuments();

        if (products <= 0) return res.status(401).json({ "msg" : "ไม่พบสินค้าในระบบ" });
        
        const resProducts = {
            products,
            totalProducts,
            totalPage: Math.ceil(totalProducts / per_Page)
        }

        res.status(200).json(resProducts);
        return true;


    } catch (error) {
        next(error);
    }
}