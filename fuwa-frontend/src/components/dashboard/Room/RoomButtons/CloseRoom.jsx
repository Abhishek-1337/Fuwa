import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as roomHandler from "../../../../realtimeCommunication/roomHandler";

const CloseRoom = () => {
  const closeRoomHandler = () => {
    roomHandler.closeRoom();
  };
  return (
    <IconButton onClick={closeRoomHandler} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoom;
