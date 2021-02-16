const Cart = require('../../model/cart.model');
const Products = require('../../model/products.model');

module.exports.createCartItem = async function(req, res, next) {
    try {

        const { userId } = req.query;
        const { productId, product_qty } = req.body;


        // 1. ดูว่า userId นี้มีตะกร้าหรือยัง

        const existCart = await Cart.findOne({ userId });
        const oldProduct = await Products.findById({ _id: productId })

        // 2. ยังไม่มีตะกร้า


        if (!existCart) {
            const newCart = {
                productId,
                product_qty,
                product_totalPrice: product_qty * oldProduct.pPrice
            }

            let newCartItem = new Cart();
            newCartItem.userId = userId;
            newCartItem.products = newCart;
            await newCartItem.save();
            // console.log(newCartItem)
            return res.status(200).json({ msg: "เพิ่มสินค้าแล้ว __ สร้างตะกร้า" });
        }

        // 3. มีแล้วให้ update qty



        // ถ้ามีตะกร้าสินค้าแล้ว
        // ค้นหาว่าในตะกร้าสินค้ามีสินค้าตรงกับที่ส่งมาหรือไม่?
        const productIndex = existCart.products.findIndex(
            (pro) => pro.productId == productId);

        console.log(`pIndex >> ${productIndex}`)


        // ถ้าไม่มีสินค้าตรงกัน ให้เพิ่มเข้าตะกร้าสินค้า
        if (productIndex < 0) {

            existCart.products.push({
                productId: oldProduct._id,
                product_qty,
                product_totalPrice: oldProduct.pPrice * product_qty,
            });
            await existCart.save();

            // ลด qty ตามจำนวน qty ที่ส่งมาจาก user
            await Products.findByIdAndUpdate({ _id: productId }, { qty: oldProduct.qty - product_qty });

            return res.status(200).json({ msg: "เพิ่มสินค้าแล้ว __ push product" });
        }

        // ถ้ามีสินค้าตรงกัน ให้อัพเดท qty และ product_totolProce
        if (productIndex >= 0) {

            existCart.products[productIndex].product_qty += product_qty;
            existCart.products[productIndex].product_totalPrice = oldProduct.pPrice * existCart.products[productIndex].product_qty;
            await existCart.save();

            // ลด qty ตามจำนวน qty ที่ส่งมาจาก user
            await Products.findByIdAndUpdate({ _id: productId }, { qty: oldProduct.qty - product_qty });

            return res.status(200).json({ msg: "เพิ่มสินค้าแล้ว __ update qty" });
        }

        res.status(200).json({ "msg": "OK" })


    } catch (error) {
        next(error);
    }
}