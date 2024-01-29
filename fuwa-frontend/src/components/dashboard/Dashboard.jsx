import { styled } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import FriendSideBar from "./FriendSideBar/FriendSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { useEffect } from "react";
import { logout } from "../shared/utils/auth";
import { useDispatch, useSelector } from "react-redux";
// import { setUserDetails } from "../../store/slices/authSlice";
import authSlice from "../../store/slices/authSlice";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";
import Room from "./Room/Room";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const isUserInRoom = useSelector((state) => state.room.isUserInRoom);

  useEffect(() => {
    console.log("hello");
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      dispatch(authSlice.actions.setUserDetails(JSON.parse(userDetails)));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [dispatch]);
  return (
    <Wrapper>
      <SideBar />
      <FriendSideBar />
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  );
};

export default Dashboard;
