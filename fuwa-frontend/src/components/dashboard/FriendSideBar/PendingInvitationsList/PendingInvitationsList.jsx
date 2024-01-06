import { styled } from "@mui/material";
import PendingInvitationItem from "./PendingInvitationItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  oerflow: "auto",
});

const PendingInvitationsList = () => {
  const friend = useSelector((state) => state.friend);
  return (
    <MainContainer>
      {friend.pendingFriendInvitations.map((invitee) => (
        <PendingInvitationItem
          key={invitee._id}
          id={invitee._id}
          username={invitee.senderId.name}
          mail={invitee.senderId.email}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
