const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password!"],
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);
