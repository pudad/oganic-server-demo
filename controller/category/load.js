const Categories = require("../../models/category.model");

module.exports.load = async function (req, res, next) {
  try {
    const { userId } = req.query;

    const isExistCategory = await Categories.find({ userId });

    if (!isExistCategory)
      return res.status(401).json({ msg: "ไม่พบ Catetory" });

    return res.status(200).json(isExistCategory);


  } catch (error) {
    next(error);
  }
};
