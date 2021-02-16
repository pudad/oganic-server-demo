const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    orderItems: [
        {
            item: { type: Schema.Types.ObjectId,ref: "OrderItem" }
        }
    ]

},{
    collation: "Orders",
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrdersSchema);