import { styled } from "@mui/material";
import AddFriendButton from "./AddFriendButton";
import FriendTitle from "./FriendTitle";
import FriendList from "./FriendList/FriendList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  height: "100%",
  width: "224px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendTitle title="Private Messages" />
      <FriendList />
      <FriendTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendSideBar;
