const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.get("/home", authController.protect, (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Home",
  });
});

module.exports = router;
