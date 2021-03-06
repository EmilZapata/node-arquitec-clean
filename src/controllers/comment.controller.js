let _commentService = null;

class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async get(req, res) {
    const { commentId } = req.params;
    const comment = await _commentService.get(commentId);
    return res.send(comment);
  }

  // async getAll(req, res) {
  //   const comments = await _commentService.getAll();
  //   return res.send(comments);
  // }

  async update(req, res) {
    const { body } = req;
    const { commentId } = req.params;
    const updateComment = await _commentService.update(commentId, body);
    return res.send(updateComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deleteComment = await _commentService.delete(commentId);
    return res.send(deleteComment);
  }

  async getIdeaComments(req, res) {
    const { ideaId } = req.params;
    const comments = await _commentService.getIdeaComments(ideaId);
    return res.send(comments);
  }

  async createdComment(req, res) {
    const { body } = req;
    const { ideaIda } = req.params;
    const createdComment = await _commentService.createdComment(body, ideaIda);
    return res.status(201).send(createdComment);
  }
}

module.exports = CommentController;
