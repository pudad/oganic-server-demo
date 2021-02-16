const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    name: { type: String, trim: true, required: true },
    imagePath: { type: String, trim: true, required: true },
}, {
    collation: 'Profiles',
    timestamps: true
});

module.exports = mongoose.model('Profiel', ProfileSchema);