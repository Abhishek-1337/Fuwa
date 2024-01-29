import { styled } from "@mui/material";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import { useSelector } from "react-redux";
import AddActiveRoomButton from "./AddActiveRoomButton";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const SideBar = () => {
  const roomState = useSelector((state) => state.room);
  console.log(roomState);
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />
      {roomState.activeRooms.map((room) => {
        return (
          <AddActiveRoomButton
            key={room.roomId}
            roomId={room.roomId}
            creatorUsername={room.creator}
            numberOfParticipants={room.participants.length}
            isUserInRoom={roomState.isUserInRoom}
          />
        );
      })}
    </MainContainer>
  );
};

export default SideBar;
