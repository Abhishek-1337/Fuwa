import { styled } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import FriendSideBar from "./FriendSideBar/FriendSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { useEffect } from "react";
import { logout } from "../shared/utils/auth";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../store/slices/authSlice";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userDetails = localStorage.get("user");
    if (!userDetails) {
      logout();
    } else {
      dispatch(setUserDetails(JSON.parse(userDetails)));
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <FriendSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
