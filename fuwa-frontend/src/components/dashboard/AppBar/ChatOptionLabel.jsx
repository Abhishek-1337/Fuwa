import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ChatOptionLabel = () => {
  const chosenChatDetails = useSelector(
    (state) => state.chat.chosenChatDetails
  );
  const name = chosenChatDetails?.name;
  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {`${name ? name : ""}`}
    </Typography>
  );
};

export default ChatOptionLabel;
