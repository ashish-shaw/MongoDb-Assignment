const mongoose = require("mongoose");
const tagSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("tag", tagSchema);
