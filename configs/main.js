require('dotenv').config();

module.exports = {
    DB: process.env.MONGO_DB_URI,
    SECRET_KEY: process.env.SECRET_KEY
}