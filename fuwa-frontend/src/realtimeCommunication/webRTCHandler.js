import store from "../store";
import { roomActions } from "../store/slices/roomSlice";
import SimplePeer from "simple-peer";
import * as socketConnection from "./socketConnection";

// const getConfiguration = () => {
//   const turnIceServers = null;

//   if (turnIceServers) {
//     //use turn servers credentials
//   } else {
//     //Using only stun server
//     return {
//       iceServers: [
//         {
//           urls: "stun: stun.l.google.com:19302",
//         },
//       ],
//     };
//   }
// };

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

let peers = {};
export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  try {
    const localStream = store.getState().room.localStream;
    if (isInitiator) {
      console.log("Preparing new peer connection as initiator");
    } else {
      console.log("Preparing new peer connection as not initiator");
    }

    peers[connUserSocketId] = new SimplePeer({
      initiator: isInitiator,
      stream: localStream,
    });

    //Listener to recieve SDP and ICE candidates data from STUN server
    peers[connUserSocketId].on("signal", (data) => {
      const signalData = {
        signal: data,
        connUserSocketId,
      };
      socketConnection.signalPeerData(signalData);
    });

    peers[connUserSocketId].on("stream", (remoteStream) => {
      console.log("Remote stream came from other connection");
      console.log("Direct connection has been established");
      //add user socket id to let the device know which stream belong to which user.
      remoteStream.connUserSocketId = connUserSocketId;
      addRemoteStream(remoteStream);
    });
  } catch (err) {
    console.log(err);
  }

  // add event listener for specific peer object, data we get from stun server nad hence needed to put an event
  // To establish connection we need to share ICE candidates and SDP data
  //Send this ICE CANDIDATES and SDP data to other user
};

export const handleSignalData = (data) => {
  const { connUserSocketId, signal } = data;

  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

export const addRemoteStream = (remoteStream) => {
  console.log("adding remote stream");
  console.log(remoteStream);
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];
  store.dispatch(roomActions.setRemoteStream(newRemoteStreams));
};

export const closeAllConnection = () => {
  // {
  //   connUserSocketId : {

  //   }
  // }

  Object.entries(peers).forEach((mappedObject) => {
    const connUserSocketId = mappedObject[0];
    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy;
      delete peers[connUserSocketId];
    }
  });
};

export const handleParticipantLeft = (data) => {
  const { connUserSocketId } = data;
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = remoteStreams.filter(
    (stream) => stream.connUserSocketId !== connUserSocketId
  );
  store.dispatch(roomActions.setRemoteStream(newRemoteStreams));
};

export const switchOutgoingStream = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
