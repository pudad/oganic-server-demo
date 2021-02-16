const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderItemsSchema = Schema(
  {
    // user: { type: Schema.Types.ObjectId,ref: "User" },
    cart: {
      totalQty: { type: Number, default: 0, required: true },
      totalCost: { type: Number, default: 0, required: true },
      items: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          qty: { type: Number, default: 0 },
          price: { type: Number, default: 0 },
          // title: { type: String },
          // productCode: { type: String },
        },
      ],
    },
    address: { type: Schema.Types.ObjectId,ref: "Address "},
    // paymentId: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
    Delivered: { type: Boolean, default: false },
  },
  {
    collation: "OrderItems",
    timestamps: true,
  }
);

module.exports = mongoose.model("OrderItem", OrderItemsSchema);
