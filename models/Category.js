const mongoose = require("mongoose");

const CategorySchemea = new mongoose.Schema(
  {
    CategoryName: {
      type: String,
      trim: true,
    },
    CategoryName: {
      type: String,
      trim: true,
    },
  }
);

module.exports = mongoose.model("Category", CategorySchemea);

