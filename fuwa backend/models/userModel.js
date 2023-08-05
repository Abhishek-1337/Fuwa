const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please input the username"],
    maxlength: 12,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
