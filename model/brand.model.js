const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    // brandCode: { type: String, trim: true, required: true }, // รหัสยี้ห้อสินค้า
    brandName: { type: String, trim: true, required: true, lowercase: true }, // ชื่อยี้ห้อสินค้า
    brandCode: { type: String, trim: true, required: true }, // รหัสยี้ห้อสินค้า
    userId: { type: Schema.Types.ObjectId, ref: 'User' }, // ชื่อยี้ห้อสินค้า
    imageUrl: { type: String, trim: true, required: true }
}, {
    collation: 'Brands',
    timestamps: true
});


module.exports = mongoose.model('Brand', BrandSchema); 