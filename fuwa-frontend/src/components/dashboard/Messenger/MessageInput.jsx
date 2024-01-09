import { styled } from "@mui/material";
import { useState } from "react";
import { sendDirectMessages } from "../../../realtimeCommunication/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  height: "55px",
  width: "100%",
  borderRadius: "8px",
  fontSize: "14px",
  border: "none",
  padding: "0 10px",
  textAlign: "center",
  color: "white",
});

const MessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");

  const handleKeyOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    console.log("Sending message to server");
    sendDirectMessages({
      recieverId: chosenChatDetails.id,
      content: message,
    });
    setMessage("");
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails?.name}`}
        onKeyDown={handleOnPress}
        onChange={handleKeyOnChange}
        value={message}
      />
    </MainContainer>
  );
};

export default MessageInput;
