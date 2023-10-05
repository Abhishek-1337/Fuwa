import { styled } from "@mui/material";
import PendingInvitationItem from "./PendingInvitationItem";

const DUMMY_INVITATIONS = [
  {
    _id: 1,
    senderId: {
      username: "Vikas",
      mail: "vikaschand@gmail.com",
    },
  },
  {
    _id: 2,
    senderId: {
      username: "Kanika",
      mail: "kanikapathak2001@gmail.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  oerflow: "auto",
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitee) => (
        <PendingInvitationItem
          key={invitee._id}
          id={invitee._id}
          username={invitee.senderId.username}
          mail={invitee.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
