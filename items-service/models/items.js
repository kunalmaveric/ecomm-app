const mongoose = require("mongoose");
const moment = require('moment');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  numberOfUnitsAvailable: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  isNegotiable: {
    type: Boolean,
    default: true
  },
  postedBy:{
    type: Schema.Types.ObjectId,
    require: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date,
    default: () => {
        return moment.utc().format()
    }
  }
});

module.exports.Item = mongoose.model("item", itemSchema);
