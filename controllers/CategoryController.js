const categories = require("../models/CategoryModel");
const users = require("../models/AdminModel");

const CategoryController = {
  getUserDetails: async (req, res) => {},

  AddCategory: async (req, res) => {
    try {
      const user = await users.findById({ _id: req.users.id });
      const newCategory = new categories({
        UserID: user._id,
        userName: user.name,
        CategoryName: req.body.CategoryName,
      });
      await newCategory.save();
      res.json({ msg: "Category Added" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  GetCategory: async (req, res) => {
    try {
      const user = await users.findById({ _id: req.users.id });
      const category = await categories.find({ UserID: user._id });
      res.json(category)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  DeleteCategory:async(req,res)=>{
    try {
      await categories.findByIdAndDelete(req.params.id)
      res.json({msg:"Deleted Category"})
    } catch (err) {
      return res.status(500).json({ msg: err.message });

      
    }
  }
};

module.exports = CategoryController;
