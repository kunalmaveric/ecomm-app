var express = require("express");
var router = express.Router();
const { checkSchema, validationResult, body } = require("express-validator");
const { itemSchema } = require("../validations/items-validations");
const { createItem, getAllItems, getItemById} = require('../controller/categories.controller');

/* GET list of items. */
router.get("/", getAllItems);

/* GET Item by Id. */
router.get("/:id", getItemById);

/* Add New items. */
router.post("/", checkSchema(itemSchema), createItem);

module.exports = router;
