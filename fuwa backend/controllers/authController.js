const User = require("../models/userModel");
const AppError = require("../utils/appError");
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
      newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email or password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.checkPassword(password, user.password))) {
    return new AppError("Please provide valid username or password", 400);
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
