import { IconButton } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { useState } from "react";

const Camera = () => {
  const [isCamEnabled, setIsCamEnabled] = useState(false);
  const cameraToggle = () => {
    setIsCamEnabled(!isCamEnabled);
  };
  return (
    <IconButton onClick={cameraToggle} style={{ color: "white" }}>
      {isCamEnabled ? <VideocamOffIcon /> : <VideocamIcon />}
    </IconButton>
  );
};

export default Camera;
