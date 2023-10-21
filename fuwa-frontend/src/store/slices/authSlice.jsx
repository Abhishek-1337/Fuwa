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
    setDetails(state, action) {
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
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(authSlice.actions.setDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

export const signUp = (userDetail, navigate) => {
  return async (dispatch) => {
    // console.log(userDetail);
    let response;
    response = await register(userDetail);

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
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(authSlice.actions.setDetails(userDetails));
      navigate("/dashboard");
    }
  };
};

export const setUserDetails = (userDetails) => {
  return (dispatch) => {
    dispatch(authSlice.actions.setDetails(userDetails));
  };
};

export default authSlice;
