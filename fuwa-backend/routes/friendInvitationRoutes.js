const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const friendInvitationController = require("../controllers/friendInvitationController");

router.post(
  "/invite",
  authController.protect,
  friendInvitationController.invite
);

module.exports = router;
