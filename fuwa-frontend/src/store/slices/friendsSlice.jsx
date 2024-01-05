import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";
import { alertActions } from "./alertSlice";

const initialState = {
  friends: [],
  pendingFriendInvitations: [],
  onlineFriends: [],
};

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    setPendingFriendInvitation(state, action) {
      console.log(action);
      state.pendingFriendInvitations = action.payload;
    },
    setFriends(state, action) {
      state.friends = action.payload;
    },
    setOnlineFriends(state, action) {
      state.onlineFriends = action.payload;
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
