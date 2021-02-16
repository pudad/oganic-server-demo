const Cart = require("../models/cart.model");

module.exports = {
  amountProduct: async (req, res, next) => {
    try {
      const { userId } = req.query;

      const cart = await Cart.findOne({ userId });


      if (!!cart) {
        return res
          .status(200)
          .json({
            msg: "Cart not Empty",
            isEmpty: false,
            value: cart.products.length,
          });
      }

      // res.status(401).json({ msg: "Cart Empty", isEmpty: true, value: 0 });
    } catch (error) {
      next(error);
    }
  },
};
 