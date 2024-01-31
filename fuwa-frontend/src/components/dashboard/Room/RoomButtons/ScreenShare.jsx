import { IconButton } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import * as webRTCHandler from "../../../../realtimeCommunication/webRTCHandler";
import { roomActions } from "../../../../store/slices/roomSlice";
import { useDispatch } from "react-redux";

const constraints = {
  audio: false,
  video: true,
};

const ScreenShare = ({
  localStream,
  screenSharingStream,
  isScreenSharingActive,
}) => {
  const dispatch = useDispatch();
  const shareScreenToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log("Error while access screen share functionality");
      }

      if (stream) {
        roomActions.setScreenSharingStream(stream);
        webRTCHandler.switchOutgoingStream(stream);
        //webRTC switchOutgoing video tracks
      }
    } else {
      //switchOutgoing video tracks
      screenSharingStream.getTracks().forEach((track) => track.stop);
      webRTCHandler.switchOutgoingStream(localStream);
      dispatch(roomActions.setScreenSharingStream(null));
    }
  };
  return (
    <IconButton onClick={shareScreenToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShare;
