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
  console.log(room);
  return (
    <MainContainer>
      <Video
        isLocalStream={room.isLocalStream}
        stream={
          room.screenSharingStream ? room.screenSharingStream : room.localStream
        }
      />
      {room.remoteStreams.map((remoteStream) => {
        return <Video stream={remoteStream} key={remoteStream.id} />;
      })}
    </MainContainer>
  );
};

export default VideoContainer;
