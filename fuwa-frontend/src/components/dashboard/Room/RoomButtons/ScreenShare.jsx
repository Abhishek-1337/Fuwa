import { IconButton } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { useState } from "react";

const ScreenShare = () => {
  const [isScreenShareEnabled, setIsScreenShareEnabled] = useState(false);
  const shareScreenToggle = () => {
    setIsScreenShareEnabled(!isScreenShareEnabled);
  };
  return (
    <IconButton onClick={shareScreenToggle} style={{ color: "white" }}>
      {isScreenShareEnabled ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShare;
