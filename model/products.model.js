const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    pCategory: { type: String, trim: true, required: true },
    pName: { type: String, trim: true, required: true },
    pCost: { type: Number, trim: true, required: true },
    pPrice: { type: Number, trim: true, required: true },
    pPriceSale: { type: Number, trim: true, required: true },
    pDetail: { type: String, trim: true, required: true },
    qty: { type: Number, trim: true, required: true },
    imagesUrl: [
        { type: String, trim: true, required: true }
    ],
}, {
    collation: 'Products',
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);