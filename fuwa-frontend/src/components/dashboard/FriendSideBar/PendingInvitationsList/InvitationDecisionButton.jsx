import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

const InvitationDecisionButton = ({
  acceptInvitationHandler,
  rejectInvitationHandler,
  disable,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "white" }}
        onClick={acceptInvitationHandler}
        disabled={disable}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        onClick={rejectInvitationHandler}
        disabled={disable}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButton;
