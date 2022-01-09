const express = require("express");
const Tag = require("../models/tag.model");
const crudController = require("./crud.controller");
const { route } = require("./post.controller");
const router = express.Router();

router.post("", crudController(Tag).post);
router.get("", crudController(Tag).get);
router.get("/:id", crudController(Tag).getOne);
router.patch("/:id", crudController(Tag).updateOne);
router.delete("/:id", crudController(Tag).deleteOne);

module.exports = router;
