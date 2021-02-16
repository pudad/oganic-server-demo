const OrderItems = require('../../model/orderItems.model');
const Orders = require('../../model/orders.model');

module.exports.create = async function(req, res, next) {
    try {

        const { userId } = req.query;
        const { address, delivered, cartData } = req.body;

        let orders;
        let orderItems;
        let newOrdersItem;
        let isExistOrders;

        orders = new Orders();
        orderItems = new OrderItems(req.body);
        newOrdersItem = await orderItems.save();

        isExistOrders = await Orders.findOne({ userId });

        // ไม่มี Orders ของ userId นี้
        // สร้าง Orders ใหม่
        if (isExistOrders === null) {
            orders = new Orders();

            orders.userId = userId,
                orders.orderItems.push(newOrdersItem._id);

            await orders.save((err, item) => {

                if (err) console.log(err);

            });
            return res.status(200).json({ msg: "create new Orders" });
        }

        // มี Orders ของ userId นี้
        // อัพเดท Orders

        isExistOrders.orderItems.push(newOrdersItem._id);
        await isExistOrders.save();

        return res.status(200).json({ msg: "update Orders complete" });

    } catch (error) {
        next(error);
    }
};