var express = require("express");
var router = express.Router();
const { checkSchema } = require("express-validator");
const { commentSchema } = require("../validations/comments.validations");
const { createComment, getAllComments, getCommentById} = require('../controllers/comments.controller');

/* GET list of comments. */
router.get("/", getAllComments);

/* GET comment by Id. */
router.get("/:id", getCommentById);

/* Add New comment. */
router.post("/", checkSchema(commentSchema), createComment);

module.exports = router;
