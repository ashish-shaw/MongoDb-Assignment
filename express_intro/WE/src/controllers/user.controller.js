const express = require("express");
const User = "../models/user.model";
const crudController = require("./crud.controller");
const router = express.Router();

router.post("", crudController(User).post);
router.get("", crudController(User).get);
router.get("/:id", crudController(User).getOne);
router.patch("/:id", crudController(User).updateOne);
router.delete("/:id", crudController(User).deleteOne);

module.exports = router;
