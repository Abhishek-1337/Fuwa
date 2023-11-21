exports.invite = (req, res) => {
  const { targetMail } = req.body;
  res.status(200).json({
    message: "Invite is being send",
  });
};
