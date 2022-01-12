const express = require("express");
const Checkout = require("../models/checkout.model");
const Book = require("../models/book.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const checkout = await Checkout.create(req.body);
    return res.status(200).send(checkout);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const checkout = await Checkout.find()
      .populate({ path: "book_id", select: "name body" })
      .lean()
      .exec();
    return res.status(200).send(checkout);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id)
      .populate({ path: "book_id", select: "name body" })
      .lean()
      .exec();
    return res.status(200).send(checkout);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const checkout = await Checkout.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(checkout);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const checkout = await Checkout.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(checkout);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
