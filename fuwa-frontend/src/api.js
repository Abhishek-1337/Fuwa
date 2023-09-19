import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 10000,
});

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
