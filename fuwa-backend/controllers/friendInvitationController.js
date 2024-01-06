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
    senderId: userId,
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
  await FriendInvitation.create({
    senderId: userId,
    recieverId: targetUser._id,
  });

  //Send pending invitation info to specific user through socket
  friendUpdates.updatePendingFriendInvitation(targetUser._id.toString());

  //Check if the newly invited user is online
  res.status(201).json({
    message: `Invite is being send`,
  });
});

exports.rejectHandler = catchAsync(async (req, res, next) => {
  const { id } = req.body;
  const userId = req.user._id;

  const invitation = await FriendInvitation.findById(id);
  if (!invitation) {
    res.status(500).json({
      status: "error",
      message: "Invitation not found",
    });
  }

  await FriendInvitation.findByIdAndDelete(id);
  friendUpdates.updatePendingFriendInvitation(userId);
});

exports.acceptHandler = catchAsync(async (req, res, next) => {
  const { id } = req.body;

  //Check if invitation is in the database
  const invitation = await FriendInvitation.findById(id);
  if (!invitation) {
    return res.status(401).json({
      status: "error",
      message: "Something went wrong",
    });
  }
  await FriendInvitation.findByIdAndDelete(id);
  const { senderId, recieverId } = invitation;

  //Update friends array for both of the user
  const senderUser = await User.findById(senderId);
  senderUser.friends = [...senderUser.friends, recieverId];

  const recieverUser = await User.findById(recieverId);
  recieverUser.friends = [...recieverUser.friends, senderId];

  await senderUser.save();
  await recieverUser.save();

  //Update friends pending list in sidebar
  friendUpdates.updatePendingFriendInvitation(recieverId.toString());
});
