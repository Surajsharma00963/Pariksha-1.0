const mongoose = require("mongoose");

const CategorySchemea = new mongoose.Schema({
  UserID:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  userName:{
    type:mongoose.Schema.Types.String,
    ref: "users"
  },
  CategoryName: {
    type: String,
  },
  
});

module.exports = mongoose.model("categories", CategorySchemea);
