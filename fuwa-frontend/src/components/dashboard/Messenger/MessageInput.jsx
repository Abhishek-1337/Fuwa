import { styled } from "@mui/material";
import { useState } from "react";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  height: "98%",
  width: "100%",
  borderRadius: "8px",
  fontSize: "14px",
  border: "none",
  padding: "0 10px",
  textAlign: "center",
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
