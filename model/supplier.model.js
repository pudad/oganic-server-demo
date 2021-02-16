const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierShema = new Schema({
    name: { type: String, trim: true, required: true }, // ชื่อบริษัทตัวแทน
    desc: { type: String, trim: true, required: true }, // รายระเอียดสินค้า
    address: { type: String, trim: true, required: true }, // ที่ตั้งบริษัท
    telephone: { type: String, trim: true, required: true }, // เบอร์โทร
    email: { type: String, trim: true, required: true }, // อีเมล์
    homePage: { type: String, trim: true, required: true }, // เว็บบริษัท
}, {
    collation: 'Suppliers',
    timestamps: true
});

module.exports = mongoose.model('Supplier', SupplierShema);