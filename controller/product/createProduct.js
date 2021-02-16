const Products = require("../../model/products.model");

module.exports.createProduct = async function(req, res, next) {
    try {

        let allImage = [];
        req.files.forEach((images) => {
            allImage.push(`https://oganic-server-demo.herokuapp.com/images/product/${req.query.userId}/${images.filename}`);
        });
        console.log(req.query.userId)
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