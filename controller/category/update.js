const Categories = require('../../model/category.model');

module.exports.update = async function(req, res, next) {
    try {
        const { categoryName } = req.body;
        const { userId } = req.query;



        return res.status(200).json()


    } catch (error) {
        next(error);
    }
}