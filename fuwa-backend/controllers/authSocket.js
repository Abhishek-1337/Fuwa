const AppError = require("../utils/appError");

const jwt = require("jsonwebtoken");

exports.verifySocketToken = (socket, next) => {
  const token = socket.handshake.auth?.token;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
  } catch (err) {
    return next(new AppError("Not authorized", 401));
  }
  next();
};
