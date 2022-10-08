const { Item } = require("../models/items");
const moment = require('moment');
class ItemService {
  constructor(item) {
    this.item = item
  }

  async create (data) {
    try {
        const now = moment.utc().format();
        data['createdAt'] = now;
        let res = new this.item(data);
        res = await res.save();
        return res;
    }catch(error) {
        throw error;
    }
  }

  async get (query, index, count) {
    let q = query || {};
    let i = parseInt(index) || 0;
    let c = parseInt(count) || 10;
    try {
        const total = await this.item.find(q).count();
        let res = await this.item.find(q).skip(c * (i - 1)).limit(c);
        return {total: total, page: i, count: c, list: res};
    }catch (error) {
        throw error;
    }
  }

  async getById (id) {
    try {
        let res = await this.item.findOne({_id : id});
        return res;
    }catch (error) {
        throw error;
    }
  }
}

module.exports.itemService = () => {
    return new ItemService(Item);
}