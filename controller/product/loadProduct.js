const Products = require('../../model/products.model');

module.exports.loadProduct = async function(req, res, next) {
    try {
        const { id } = req.params;

        const product = await Products.findById(id);


        if (!product) {
            return res.status(401).json({ "msg": "ไม่พบสินค้า" });
        }


        res.status(200).json(product);





    } catch (error) {
        next(error);
    }
}