const { validationResult } = require("express-validator");
const { categoryService } = require("../services/categories.service");
const categorySvc = categoryService();
module.exports.createCategory = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await categorySvc.create(req.body);
    res.status(201).json({ message: "new category created", itemId: data._id });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
};

module.exports.getAllCategories = async (req, res, next) => {
    try {
        let data = await categorySvc.get({}, req.query.page, req.query.count);
        let responseBody = {
            ...{ message: "Category list"},
            ... data
        }
        res.status(200).json(responseBody);
    }catch (error) {
        res.status(500).json({ message: "Something went wrong!", error: error });
    }
}

module.exports.getCategoryById = async (req, res, next) => {
    try {
        let data = await categorySvc.getById(req.params.id);
        res.status(200).json(data);
    }catch (error) {
        res.status(500).json({ message: "Something went wrong!", error: error });
    }
}