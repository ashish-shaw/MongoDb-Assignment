const express = require("express");
const Comment = require("../models/comment.model");
const crudWithOnePopulateController = require("./crudwithonepopulate.controller");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(200).send(comment);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate({ path: "post_id", select: { title: 1, content: 1 } })
      .lean()
      .exec();
    return res.status(200).send(comments);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get(
  "/:id",
  crudWithOnePopulateController(comment, {
    path: "post_id",
    select: { title: 1, content: 1 },
  }).getOneWithOnePopulate
);

router.patch("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(comment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(comment);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
