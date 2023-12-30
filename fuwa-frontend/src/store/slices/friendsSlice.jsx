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
    setPendingFriendInvitation(state, action) {
      state.pendingFriendsInvitations = action.pendingFriendInvitations;
    },
    setFriends(state, action) {
      state.friends = action.friends;
    },
    setOnlineFriends(state, action) {
      state.onlineFriends = action.onlineFriends;
    },
  },
});

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);
    console.log(response);
    if (response.error) {
      dispatch(
        alertActions.openAlertMessage(
          response?.message?.response?.data.message ||
            response?.exception?.response?.data?.message
        )
      );
    } else {
      dispatch(alertActions.openAlertMessage("Invitation has been sent"));
    }
    closeDialogHandler();
  };
};

export const friendActions = friendSlice.actions;
export default friendSlice;
