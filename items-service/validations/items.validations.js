module.exports.itemSchema = {
  category: {
    notEmpty: true,
    errorMessage: "Please select a category.",
    isString: true,
  },
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
  price: {
    notEmpty: true,
    errorMessage: "Please enter a price.",
    isNumeric: true,
  },
  numberOfUnitsAvailable: {
    notEmpty: true,
    errorMessage: "Please enter a number of units available.",
    isNumeric: true,
  },
  postedBy: {
    notEmpty: true,
    errorMessage: "Please provide seller info.",
    isString: true,
  },
};
