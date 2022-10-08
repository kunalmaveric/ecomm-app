const { validationResult } = require("express-validator");
const { itemService } = require("../services/items.service");
const itemSvc = itemService();
const axios = require("axios");
module.exports.createItem = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await itemSvc.create(req.body);
    res.status(201).json({ message: "new item created", itemId: data._id });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
};

module.exports.getAllItems = async (req, res, next) => {
  try {
    let data = await itemSvc.get(req.query, req.query.page, req.query.count);

    for (let i = 0; i < data.list.length; i++) {
      var config = {
        method: "get",
        url: "http://localhost:3001/categories/" + data.list[i].category,
        headers: {},
      };
      const categoryDetails = await axios(config);
      data.list[i]._doc.category = categoryDetails.data;
    }
    let responseBody = {
      ...{ message: "Items list" },
      ...data,
    };
    res.status(200).json(responseBody);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
};

module.exports.getItemById = async (req, res, next) => {
  try {
    let data = await itemSvc.getById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
};
