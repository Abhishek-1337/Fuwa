import store from "../store/index";
import * as socketConnection from "./socketConnection";
import { roomActions } from "../store/slices/roomSlice";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = () => {
  const successCallbackFn = () => {
    store.dispatch(
      roomActions.setOpenRoom({ isUserInRoom: true, isUserRoomCreator: true })
    );
    const onlyAudio = store.getState().room.audioOnly;
    store.dispatch(roomActions.setIsUserJoinedWithAudioOnly(onlyAudio));
    socketConnection.createNewRoom();
  };
  const onlyAudio = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(onlyAudio, successCallbackFn);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(roomActions.setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  const friends = store.getState().friend.friends;
  const rooms = [];

  const userId = store.getState().auth.userDetails?.id;

  activeRooms.forEach((room) => {
    const isRoomCreatedByMe = room.roomCreator.userId === userId;

    if (isRoomCreatedByMe) {
      rooms.push({ ...room, creator: "Me" });
    } else {
      friends.forEach((f) => {
        if (f.id === room.roomCreator.userId) {
          rooms.push({ ...room, creator: f.name });
        }
      });
    }
  });
  store.dispatch(roomActions.setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFn = () => {
    store.dispatch(roomActions.setRoomDetails({ roomId }));
    store.dispatch(
      roomActions.setOpenRoom({ isUserInRoom: true, isUserRoomCreator: false })
    );

    const onlyAudio = store.getState().room.audioOnly;
    store.dispatch(roomActions.setIsUserJoinedWithAudioOnly(onlyAudio));
    socketConnection.joinRoom({ roomId });
  };
  const onlyAudio = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(onlyAudio, successCallbackFn);
};

export const closeRoom = () => {
  const roomDetails = store.getState().room.roomDetails;
  console.log(roomDetails);
  socketConnection.closeRoom({ roomId: roomDetails.roomId });
  store.dispatch(roomActions.setRoomDetails(null));
  store.dispatch(
    roomActions.setOpenRoom({ isUserInRoom: false, isUserRoomCreator: false })
  );

  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks((track) => track.stop());
    store.dispatch(
      roomActions.setScreenSharingStream({
        isScreenSharingActive: false,
        screenSharingStream: null,
      })
    );
  }

  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
  }

  store.dispatch(roomActions.setRemoteStream([]));
  webRTCHandler.closeAllConnection();
  store.dispatch(roomActions.setLocalStream(null));
};
