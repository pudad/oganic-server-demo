const Products = require("../../model/products.model");

module.exports.createProduct = async function(req, res, next) {
    try {

        let allImage = [];
        req.files.forEach((images) => {
            allImage.push(`http://localhost:3000/images/product/${req.query.userId}/${images.filename}`);
        });

        const products = new Products({
            ...req.body,
            imagesUrl: allImage
        });

        await products.save();
        return res.status(200).json({ "msg": "สร้างสินค้าเรียบร้อย" })

    } catch (error) {
        next(error);
    }
};