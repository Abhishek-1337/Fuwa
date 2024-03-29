import { Tooltip, Button } from "@mui/material";
import Avatar from "../../shared/components/Avatar";
import * as roomHandler from "../../../realtimeCommunication/roomHandler";

const AddActiveRoomButton = ({
  roomId,
  creatorUsername,
  numberOfParticipants,
  isUserInRoom,
}) => {
  // const participantsInLimit = numberOfParticipants < 3;
  const roomTitle = `Creator: ${creatorUsername} Connected: ${numberOfParticipants}`;

  const roomJoinClickHandler = () => {
    //To join this room the number of participants should be less than 4
    if (numberOfParticipants < 4 && !isUserInRoom) {
      //join
      roomHandler.joinRoom(roomId);
    }
  };

  return (
    <Tooltip title={roomTitle}>
      <Button
        onClick={roomJoinClickHandler}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "16px",
          margin: 0,
          padding: 0,
          minWidth: 0,
          marginTop: "10px",
          color: "white",
          backgroundColor: "#5865F2",
        }}
      >
        <Avatar username={creatorUsername} />
      </Button>
    </Tooltip>
  );
};

export default AddActiveRoomButton;
