import { styled } from "@mui/material";
import RoomResizeButton from "./RoomResizeButton";
import Mic from "./RoomButtons/Mic";
import Camera from "./RoomButtons/Camera";
import ScreenShare from "./RoomButtons/ScreenShare";
import CloseRoom from "./RoomButtons/CloseRoom";

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
  return (
    <MainContainer>
      <ScreenShare />
      <Mic />
      <Camera />
      <CloseRoom />
      <RoomResizeButton
        isMinimized={isMinimized}
        roomResizeHandler={roomResizeHandler}
      />
    </MainContainer>
  );
};

export default RoomButtonsContainer;
