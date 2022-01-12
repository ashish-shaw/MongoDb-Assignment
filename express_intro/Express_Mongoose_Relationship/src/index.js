const express = require("express");

const sectionController = require("./controllers/section.controllers");
const authorController = require("./controllers/author.controllers");
const bookController = require("./controllers/book.controllers");
const checkoutController = require("./controllers/checkout.controllers");

const app = express();
app.use(express.json());

app.use("/sections", sectionController);
app.use("/authors", authorController);
app.use("/books", bookController);
app.use("/checkouts", checkoutController);

module.exports = app;
