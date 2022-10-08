var express = require("express");
var router = express.Router();
const { checkSchema, validationResult, body } = require("express-validator");
const { categorySchema } = require("../validations/category.validations");
const { createCategory, getAllCategories, getCategoryById} = require('../controllers/categories.controller');

/* GET list of items. */
router.get("/", getAllCategories);

/* GET Item by Id. */
router.get("/:id", getCategoryById);

/* Add New items. */
router.post("/", checkSchema(categorySchema), createCategory);

module.exports = router;
