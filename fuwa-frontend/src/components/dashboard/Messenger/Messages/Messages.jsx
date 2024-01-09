import { styled } from "@mui/material";
import MessageHeader from "./MessageHeader";
import { useSelector } from "react-redux";
import DUMMY_MESSAGES from "./DUMMY_MESSAGES";
import Message from "./Message";

const MainContainer = styled("div")({
  height: "calc(100%-100px)",
  display: "flex",
  flexDirection: "column",
});

const Messages = () => {
  const chat = useSelector((state) => state.chat);
  return (
    <MainContainer>
      <MessageHeader name={chat.chosenChatDetails?.name} />
      {DUMMY_MESSAGES.map((message) => {
        return (
          <Message
            key={message._id}
            content={message.content}
            name={message.author.username}
            sameAuthor={message.sameAuthor}
            date={message.date}
            sameDay={message.sameDay}
          />
        );
      })}
    </MainContainer>
  );
};

export default Messages;
