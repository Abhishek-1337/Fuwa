import axios from "axios";
import { logout } from "./components/shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//public routes

export const login = async (data) => {
  console.log("login");
  try {
    return await apiClient.post("/users/login", data);
  } catch (err) {
    return {
      error: true,
      message: err,
    };
  }
};

export const register = async (data) => {
  console.log("register");
  try {
    return await apiClient.post("/users/signup", data);
  } catch (err) {
    return {
      error: true,
      message: err,
    };
  }
};

//secure routes

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/invite", data);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

const checkResponseCode = (exception) => {
  const responseCode = exception.response;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
