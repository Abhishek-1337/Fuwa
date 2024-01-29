import { styled } from "@mui/material";
import { useState } from "react";
import VideoContainer from "./VideoContainer";
import RoomButtons from "./RoomButtonsContainer";

const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#202225",
});

const minimizedStyle = {
  height: "40vh",
  width: "30%",
  bottom: "0px",
  right: "0px",
};

const fullSizeStyle = {
  width: "100%",
  height: "100vh",
};

const Room = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  const resizeHandler = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <MainContainer style={isMinimized ? minimizedStyle : fullSizeStyle}>
      <VideoContainer />
      <RoomButtons
        isMinimized={isMinimized}
        roomResizeHandler={resizeHandler}
      />
    </MainContainer>
  );
};

export default Room;
