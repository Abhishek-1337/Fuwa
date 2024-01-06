import { Box, Tooltip, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButton from "./InvitationDecisionButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from "../../../../store/slices/friendsSlice";

const PendingInvitationItem = ({ id, username, mail }) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const dispatch = useDispatch();
  const handleAcceptInvitation = () => {
    dispatch(acceptFriendInvitation({ id }));
    setButtonDisable(true);
  };

  const handleRejectInvitation = () => {
    dispatch(rejectFriendInvitation({ id }));
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
