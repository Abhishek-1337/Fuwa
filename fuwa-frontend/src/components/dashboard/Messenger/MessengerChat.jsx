import { styled } from "@mui/material";
import Messages from "./Messages/Messages";
import MessageInput from "./MessageInput";
import { useEffect } from "react";

const Wrapper = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const MessengerChat = ({ chosenChatDetails }) => {
  useEffect(() => {
    //fetch chat history of specific user with user id
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <MessageInput chosenChatDetails={chosenChatDetails} />
    </Wrapper>
  );
};

export default MessengerChat;
