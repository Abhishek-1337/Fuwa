import store from "../store";
import { roomActions } from "../store/slices/roomSlice";

const onlyAudioConstraint = {
  audio: true,
  video: false,
};

const defaultConstraint = {
  audio: true,
  video: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFn) => {
  const constraints = onlyAudio ? onlyAudioConstraint : defaultConstraint;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(roomActions.setLocalStream(stream));
      callbackFn();
    })
    .catch((err) => {
      console.log(err);
      console.log("Cannot get access to local stream");
    });
};
