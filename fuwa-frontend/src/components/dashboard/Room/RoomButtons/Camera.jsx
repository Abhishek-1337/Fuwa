import { IconButton } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { useState } from "react";

const Camera = ({ localStream }) => {
  const [isCamEnabled, setIsCamEnabled] = useState(true);
  const cameraToggle = () => {
    localStream.getVideoTracks()[0].enabled = !isCamEnabled;
    setIsCamEnabled(!isCamEnabled);
  };
  return (
    <IconButton onClick={cameraToggle} style={{ color: "white" }}>
      {isCamEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default Camera;
