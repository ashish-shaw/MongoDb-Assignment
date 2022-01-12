const express = require("express");
const Book = require("../models/book.model");
const Checkout = require("../models/checkout.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const book = await Book.find()
      .populate({ path: "author_id", select: "first_name last_name" })
      .populate({ path: "section_id", select: "name" })
      .lean()
      .exec();
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate({ path: "author_id", select: "first_name last_name" })
      .populate({ path: "section_id", select: "name" })
      .lean()
      .exec();
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
