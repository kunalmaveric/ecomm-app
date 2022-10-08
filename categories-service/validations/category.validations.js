module.exports.categorySchema = {
  title: {
    notEmpty: true,
    errorMessage: "Please enter a title.",
    isString: true,
  },
  description: {
    notEmpty: true,
    errorMessage: "Please enter some description.",
    isString: true,
  },
};
