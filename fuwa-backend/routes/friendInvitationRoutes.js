const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const friendInvitationController = require("../controllers/friendInvitationController");

router.post(
  "/invite",
  authController.protect,
  friendInvitationController.invite
);

router.post(
  "/accept",
  authController.protect,
  friendInvitationController.acceptHandler
);

router.post(
  "/reject",
  authController.protect,
  friendInvitationController.rejectHandler
);

module.exports = router;
