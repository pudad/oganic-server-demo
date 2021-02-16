const Users = require("../model/users.model");

const getUsers = async function(req, res, next) {
    try {
        const users = await Users.find({});
        return res.status(200).json({ msg: users })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUsers
}