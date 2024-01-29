import { styled } from "@mui/material";
import Video from "./Video";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideoContainer = () => {
  const room = useSelector((state) => state.room);
  return (
    <MainContainer>
      <Video isLocalStream={room.isLocalStream} stream={room.localStream} />
    </MainContainer>
  );
};

export default VideoContainer;
