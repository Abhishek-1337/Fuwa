import store from "../store/index";
import * as socketConnection from "./socketConnection";
import { roomActions } from "../store/slices/roomSlice";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = () => {
  const successCallbackFn = () => {
    store.dispatch(
      roomActions.setOpenRoom({ isUserInRoom: true, isUserRoomCreator: true })
    );
    socketConnection.createNewRoom();
  };
  const onlyAudio = store.getState().room.audioOnly;
  console.log(onlyAudio);
  webRTCHandler.getLocalStreamPreview(onlyAudio, successCallbackFn);
};

export const setRoomDetailsState = (data) => {
  const { roomDetails } = data;
  store.dispatch(roomActions.setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  const friends = store.getState().friend.friends;
  const rooms = [];

  activeRooms.forEach((room) => {
    friends.forEach((f) => {
      if (f.id === room.roomCreator.userId) {
        rooms.push({ ...room, creator: f.name });
      }
    });
  });
  store.dispatch(roomActions.setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFn = () => {
    store.dispatch(roomActions.setRoomDetails({ roomId }));
    store.dispatch(
      roomActions.setOpenRoom({ isUserInRoom: true, isUserRoomCreator: false })
    );
    socketConnection.joinRoom({ roomId });
  };
  const onlyAudio = store.getState().room.audioOnly;
  console.log(onlyAudio);
  webRTCHandler.getLocalStreamPreview(onlyAudio, successCallbackFn);
};

export const closeRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;
  store.dispatch(roomActions.setRoomDetails(null));
  store.dispatch(
    roomActions.setOpenRoom({ isUserInRoom: false, isUserRoomCreator: false })
  );
  socketConnection.closeRoom({ roomId });
};
