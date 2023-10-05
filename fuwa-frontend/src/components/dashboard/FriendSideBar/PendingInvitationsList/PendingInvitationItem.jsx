import { Box, Tooltip, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButton from "./InvitationDecisionButton";
import { useState } from "react";

const PendingInvitationItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisable(true);
  };

  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisable(true);
  };
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              fontWeight: 700,
              marginLeft: "7px",
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>

          <InvitationDecisionButton
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
            disable={buttonDisable}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationItem;
