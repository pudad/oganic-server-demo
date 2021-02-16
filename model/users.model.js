const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserShema = new Schema({
    imageUrl: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, default: false },
    username: { type: String, trim: true, required: true },
    email: { type: String, unique: true, index: true, required: true },
    password: { type: String, trim: true, require: true },
    address: { type: Schema.Types.ObjectId, ref: 'Address' }
}, {
    collation: "Users",
    timestamps: true
});

module.exports = mongoose.model("User", UserShema);