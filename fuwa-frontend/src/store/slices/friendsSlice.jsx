import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";
import { alertActions } from "./alertSlice";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineFriends: [],
};

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    setFriendInvitation(state, action) {
      state.pendingFriendsInvitations = action.pendingFriendsInvitations;
    },
  },
});

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);
    if (response.error) {
      dispatch(
        alertActions.openAlertMessage(response?.message?.response?.data.message)
      );
    } else {
      dispatch(alertActions.openAlertMessage("Invitation has been sent"));
      closeDialogHandler();
    }
  };
};
export default friendSlice;
