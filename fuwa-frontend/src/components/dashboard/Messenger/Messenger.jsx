import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import MessengerWelcome from "./MessengerWelcome";
import MessengerChat from "./MessengerChat";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
});

const Messenger = () => {
  const chatDetails = useSelector((state) => state.chat);
  const { chosenChatDetails } = chatDetails;
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <MessengerWelcome />
      ) : (
        <MessengerChat chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

export default Messenger;
