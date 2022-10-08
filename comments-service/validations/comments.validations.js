module.exports.commentSchema = {
  comment: {
    notEmpty: true,
    errorMessage: "Comment can not be empty.",
    isString: true,
  },
  commentedBy: {
    notEmpty: true,
    errorMessage: "Please enter user information.",
    isString: true,
  },
  parent: {
    notEmpty: true,
    errorMessage: "Please enter parent comment id or item id.",
    isString: true,
  },
};
