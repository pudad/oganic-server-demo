const Cart = require("../../models/cart.model");

module.exports.deleteCartItem = async function (req, res, next) {
  try {
    let rusult;  
    const { cartId } = req.query;

    rusult = await Cart.findByIdAndDelete({_id: cartId}, function(err, item) {
        if (err) console.log(err);
        if (item) {
            
        }
    });

    console.log(rusult)

  } catch (error) {
    next(error);
  }
};
