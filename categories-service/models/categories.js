const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: () => {
      return moment.utc().format();
    },
  },
});

module.exports.Category = mongoose.model("category", categorySchema);
