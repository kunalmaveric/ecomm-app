const { validationResult } = require("express-validator");
const { commentService } = require("../services/comments.service");
const commentSvc = commentService();
module.exports.createComment = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await commentSvc.create(req.body);
    res.status(201).json({ message: "new comment added", commentId: data._id });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
};

module.exports.getAllComments = async (req, res, next) => {
    try {
        const query = {
            parent: req.query.parent
        }
        let data = await commentSvc.get(query, req.query.page, req.query.count);
        let responseBody = {
            ...{ message: "Comments list"},
            ... data
        }
        res.status(200).json(responseBody);
    }catch (error) {
        res.status(500).json({ message: "Something went wrong!", error: error });
    }
}

module.exports.getCommentById = async (req, res, next) => {
    try {
        let data = await commentSvc.getById(req.params.id);
        res.status(200).json(data);
    }catch (error) {
        res.status(500).json({ message: "Something went wrong!", error: error });
    }
}