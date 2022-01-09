const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: false },
    email: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" },
    age: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
