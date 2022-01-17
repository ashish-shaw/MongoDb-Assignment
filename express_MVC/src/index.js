const express = require("express");
const app = express();

app.use(express.json());
module.exports = app;

const topicController = require("./controllers/topic.controller");
const userController = require("./controllers/user.controller");
const evaluationController = require("./controllers/evaluation.controller");
const studentController = require("./controllers/student.controller");

app.use("/topics", topicController);
app.use("/users", userController);
app.use("/evaluations", evaluationController);
app.use("/students", studentController);
