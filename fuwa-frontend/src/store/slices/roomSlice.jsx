import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  isLocalStream: true,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
  isUserJoinedWithAudioOnly: false,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setOpenRoom(state, action) {
      state.isUserInRoom = action.payload.isUserInRoom;
      state.isUserRoomCreator = action.payload.isUserRoomCreator;
    },
    setRoomDetails(state, action) {
      state.roomDetails = action.payload;
    },
    setActiveRooms(state, action) {
      state.activeRooms = action.payload;
    },
    setLocalStream(state, action) {
      state.localStream = action.payload;
    },
    setAudioOnly(state, action) {
      console.log(action);
      state.audioOnly = action.payload;
    },
    setRemoteStream(state, action) {
      state.remoteStreams = action.payload;
    },
    setScreenSharingStream(state, action) {
      state.isScreenSharingActive = action.payload.isScreenSharingActive;
      state.screenSharingStream = action.payload.screenSharingStream;
    },
    setIsUserJoinedWithAudioOnly(state, action) {
      state.isUserJoinedWithAudioOnly = action.payload;
    },
  },
});

export const roomActions = roomSlice.actions;
export default roomSlice;
