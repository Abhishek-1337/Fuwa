const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const FriendInvitation = require("../models/friendInvitationModel");
const friendUpdates = require("../socket handlers/updates/friends");

exports.invite = catchAsync(async (req, res, next) => {
  const { targetMail } = req.body;
  const { email } = req.user;
  const userId = req.user._id;

  if (email.toLowerCase() === targetMail.toLowerCase()) {
    return next(new AppError("You cannot send request to yourself", 409));
  }

  //Check if the invited user exist in the user database or not
  const targetUser = await User.findOne({ email: targetMail });

  if (!targetUser) {
    return next(
      new AppError(`User with email ${targetMail} does not exist`, 404)
    );
  }

  //Check if user is already been invited
  const inviteAlreadySent = await FriendInvitation.findOne({
    recieverId: targetUser._id,
  });

  if (inviteAlreadySent) {
    return next(new AppError("User is already invited", 409));
  }

  //Check if user is already your friend
  const userAlreadyFriend = targetUser.friends.find((friendId) => {
    return friendId === userId;
  });

  if (userAlreadyFriend) {
    return new AppError(
      "User is already added. Please check friends list",
      400
    );
  }

  //Save the new friend invitation to database
  const newInvite = await FriendInvitation.create({
    senderId: userId,
    recieverId: targetUser._id,
  });

  //Send pending invitation info to specific user through socket
  friendUpdates.updatePendingFriendInvitation(userId);

  //Check if the newly invited user is online
  res.status(201).json({
    message: `Invite is being send`,
  });
});
