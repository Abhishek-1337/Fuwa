import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api";
import { alertActions } from "./alertSlice";

const initialState = {
  userDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const signIn = (userDetail, navigate) => {
  return async (dispatch) => {
    // console.log(userDetail);
    let response;
    response = await login(userDetail);

    // console.log(response.message.response.data.message);
    if (response.error) {
      dispatch(
        alertActions.openAlertMessage(response?.message?.response?.data.message)
      );
    } else {
      const userDetails = {
        email: response.data.user.email,
        token: response.data.token,
        name: response.data.user.name,
        id: response.data.user._id,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(authSlice.actions.setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

export const signUp = (userDetail, navigate) => {
  return async (dispatch) => {
    // console.log(userDetail);
    let response;
    response = await register(userDetail);
    console.log(response);

    // console.log(response.message.response.data.message);
    if (response.error) {
      dispatch(
        alertActions.openAlertMessage(response.message.response.data.message)
      );
    } else {
      const userDetails = {
        email: response.data.user.email,
        token: response.data.token,
        name: response.data.user.name,
        id: response.data.user._id,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(authSlice.actions.setUserDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

export default authSlice;
