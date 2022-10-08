const { Comment } = require("../models/comments");
const moment = require('moment');
class CommentService {
  constructor(comment) {
    this.comment = comment
  }

  async create (data) {
    try {
        const now = moment.utc().format();
        data['createdAt'] = now;
        let res = new this.comment(data);
        res = await res.save();
        return res;
    }catch(error) {
        throw error;
    }
  }

  async get (query, index, count) {
    let q = query || {};
    try {

        let res = await this.comment.find(q);
        return { list: res};
    }catch (error) {
        throw error;
    }
  }

  async getById (id) {
    try {
        let res = await this.comment.findOne({_id : id});
        return res;
    }catch (error) {
        throw error;
    }
  }
}

module.exports.commentService = () => {
    return new CommentService(Comment);
}