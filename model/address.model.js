const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    addresses: [{
        fullname: { type: String, trim: true, required: true },
        isDefault: { type: Boolean},
        address: {
            address: { type: String, trim: true, required: true },
            subDistrict: { type: String, trim: true, required: true },
            district: { type: String, trim: true, required: true },
            province: { type: String, trim: true, required: true },
            postcode: { type: String, trim: true, required: true },
            tel: { type: String, trim: true, required: true },
            etc: { type: String, trim: true, required: true },
        }
    }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    collation: 'addresses',
    timestamps: true
});

module.exports = mongoose.model('Address', AddressSchema);