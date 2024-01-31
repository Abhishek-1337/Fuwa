import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useState } from "react";

const Mic = ({ localStream }) => {
  const [isMicEnabled, setIsMicEnabled] = useState(true);
  const micToggle = () => {
    localStream.getAudioTracks()[0].enabled = !isMicEnabled;
    setIsMicEnabled(!isMicEnabled);
  };
  return (
    <IconButton onClick={micToggle} style={{ color: "white" }}>
      {isMicEnabled ? <MicOffIcon /> : <MicIcon />}
    </IconButton>
  );
};

export default Mic;
