const Categories = require('../../model/category.model');

module.exports.create = async function(req, res, next) {
    try {
        const { categoryName, categoryCode } = req.body;

        const isExistCategory = await Categories.find({ categoryName, userId: req.query.userId });

        if (isExistCategory.length > 0) {
            return res.status(200).json({ "msg": `มี Category - ${categoryName} แล้ว` });
        }

        const newCategory = {
            categoryName,
            categoryCode,
            userId: req.query.userId,
            categoryImagesUrl: `https://oganic-server-demo.herokuapp.com/images/category/${req.query.userId}/${req.file.filename}`
        }

        new Categories(newCategory).save(null, () => {
            return res.status(200).json({ "msg": `บันทึก Category - ${categoryName} แล้ว` });
        });






    } catch (error) {
        next(error);
    }
}