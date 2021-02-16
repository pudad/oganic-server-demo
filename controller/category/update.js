const Categories = require('../../models/category.model');

module.exports.update = async function(req, res, next) {
    try {
        const { categoryName } = req.body;
        const { userId } = req.query;

        


    } catch (error) {
        next(error);
    }
}