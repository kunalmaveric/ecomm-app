const { Category } = require("../models/categories");
const moment = require('moment');
class CategoryService {
  constructor(category) {
    this.category = category
  }

  async create (data) {
    try {
        const now = moment.utc().format();
        data['createdAt'] = now;
        let res = new this.category(data);
        res = await res.save();
        return res;
    }catch(error) {
        throw error;
    }
  }

  async get (query, index, count) {
    let q = query || {};
    try {

        let res = await this.category.find(q);
        return { list: res};
    }catch (error) {
        throw error;
    }
  }

  async getById (id) {
    try {
        let res = await this.category.findOne({_id : id});
        return res;
    }catch (error) {
        throw error;
    }
  }
}

module.exports.categoryService = () => {
    return new CategoryService(Category);
}