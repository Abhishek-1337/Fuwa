const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const jwtSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createJwtToken = (user, status, res) => {
  const token = jwtSign(user._id);
  user.password = undefined;
  res.status(status).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = catchAsync(async (req, res) => {
  const newUser = await User.create({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  createJwtToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email + " " + password);
  if (!email || !password) {
    return next(new AppError("Please provide email or password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError("Please provide valid username or password", 400));
  }

  createJwtToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in. Please login to get access", 401)
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);
  if (!user) {
    return next(new AppError("User not found", 401));
  }

  req.user = user;
  next();
});
