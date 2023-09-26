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
    login(state, action) {
      const item = action.payload;
      return {
        ...state,
        item,
      };
    },
    register(state) {
      return {
        ...state,
      };
    },
  },
});

export const setUserDetails = (userDetail, navigate, type) => {
  return async (dispatch) => {
    // console.log(userDetail);
    let response;
    if (type && type === "register") {
      response = await register(userDetail);
    } else {
      response = await login(userDetail);
    }

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
      dispatch(authSlice.actions.login(userDetails));
      navigate("/dashboard");
    }
  };
};

export default authSlice;
