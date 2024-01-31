import { styled } from "@mui/material";
import RoomResizeButton from "./RoomResizeButton";
import Mic from "./RoomButtons/Mic";
import Camera from "./RoomButtons/Camera";
import ScreenShare from "./RoomButtons/ScreenShare";
import CloseRoom from "./RoomButtons/CloseRoom";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  height: "20%",
  width: "100%",
  backgroundColor: "#5865f2",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RoomButtonsContainer = ({ isMinimized, roomResizeHandler }) => {
  const room = useSelector((state) => state.room);
  return (
    <MainContainer>
      {!room.isUserJoinedWithAudioOnly && (
        <ScreenShare
          localStream={room.localStream}
          isScreenSharingActive={room.isScreenSharingActive}
          screenSharingActive={room.screenSharingStream}
        />
      )}
      <Mic localStream={room.localStream} />
      {!room.isUserJoinedWithAudioOnly && (
        <Camera localStream={room.localStream} />
      )}
      <CloseRoom />
      <RoomResizeButton
        isMinimized={isMinimized}
        roomResizeHandler={roomResizeHandler}
      />
    </MainContainer>
  );
};

export default RoomButtonsContainer;
