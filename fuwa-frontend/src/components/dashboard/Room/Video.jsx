import { styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const MainContainer = styled("div")({
  height: "50%",
  width: "50%",
  backgroundColor: "black",
});

const VideoEl = styled("video")({
  height: "100%",
  width: "100%",
});

const Video = ({ isLocalStream }) => {
  const videoRef = useRef();
  const [localStream, setLocalStream] = useState(null);
  console.log(localStream);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        setLocalStream(stream);
        // videoRef.current.src = stream;
      });
  }, []);

  useEffect(() => {
    if (localStream) {
      console.log(videoRef.current);
      videoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   video.srcObject = stream;

  //   video.onLoadedMetaData = () => {
  //     video.play();
  //   };
  // }, [stream]);
  return (
    <MainContainer>
      {localStream && (
        <VideoEl autoPlay muted={isLocalStream ? true : false} ref={videoRef} />
      )}
    </MainContainer>
  );
};

export default Video;
