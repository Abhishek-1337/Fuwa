import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const MainContainer = styled("div")({
  position: "absolute",
  bottom: "10px",
  right: "10px",
});

const RoomResizeButton = ({ isMinimized, roomResizeHandler }) => {
  return (
    <MainContainer>
      <IconButton
        style={{ color: "white" }}
        onClick={roomResizeHandler}
        size="small"
      >
        {isMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
      </IconButton>
    </MainContainer>
  );
};

export default RoomResizeButton;
