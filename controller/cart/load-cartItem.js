const Cart = require("../../model/cart.model");

module.exports.loadCartItem = async function(req, res, next) {
    try {
        let cart;
        const { userId } = req.query;

        cart = await Cart.findOne({ userId }).populate("products.productId").exec();

        if (cart) {
            res.status(200).json({ msg: cart, isEmtry: false });
        } else {
            res.status(200).json({ msg: "ไม่พบตะกร้าสินค้า", isEmtry: true });
        }

    } catch (error) {
        next(error);
    }
};