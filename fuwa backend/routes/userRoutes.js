const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.signup);

router.post("/login", (req, res) => {
  res.end("Login request recieved");
});

module.exports = router;
