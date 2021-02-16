const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    products: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        product_qty: { type: Number, required: true, trim: true },
        product_totalPrice: { type: Number, required: true, trim: true }
    }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' },

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collation: 'CartItems',
    timestamps: true
});

CartItemSchema.virtual('cart_qty').get(function() {
    let totolQty = 0;
    this.products.forEach( ({product_qty}) => {
        totolQty += product_qty;
    });
  return totolQty;
});

CartItemSchema.virtual('cart_totalPrice').get(function() {
    let result = 0;
    this.products.forEach(({product_totalPrice}) => {
        result += product_totalPrice;
    });
    return result;
});



module.exports = mongoose.model('CartItem', CartItemSchema);