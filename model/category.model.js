const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryName: { type: String, trim: true, required: true, unique: true, lowercase: true }, // ชื่อประเภทสินค้า
    categoryImagesUrl: { type: String, trim: true, required: true }, // รูปประเภทสินค้า
    userId: { type: Schema.Types.ObjectId, ref: 'User' }, // รูปประเภทสินค้า
    categoryCode: { type: String, trim: true, required: true }
}, {
    collation: 'Categories',
    timestamps: true
});


module.exports = mongoose.model('category', CategorySchema);
