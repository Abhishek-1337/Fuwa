import { styled } from "@mui/material";
import Messages from "./Messages/Messages";
import MessageInput from "./MessageInput";
import { useEffect } from "react";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerChat = (chosenChatDetails) => {
  useEffect(() => {
    //fetch chat history of specific user with user id
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <MessageInput />
    </Wrapper>
  );
};

export default MessengerChat;
