const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

/**
 * Note:
 * Item field is replaced by parent field to create multilevel comments
 * If it is Top level parent comment then parent field will hold item id and 
 * if it is child comment then parent field will hold object id of parent comment
 */

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  commentedBy: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    require: true,
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

module.exports.Comment = mongoose.model("comment", commentSchema);
