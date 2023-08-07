const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res) => {
  const newUser = await User.create({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const token = "token";
  res.status(200).json({
    status: "success",
    data: {
      token,
    },
  });
});
