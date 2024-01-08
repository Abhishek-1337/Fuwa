import { Button, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import OnlineIndicator from "./OnlineIndicator";
import { useDispatch } from "react-redux";
import { chatActions, chatTypes } from "../../../../store/slices/chatSlice";

const FriendsListItem = ({ id, username, isOnline }) => {
  const dispatch = useDispatch();
  const chooseActiveChat = () => {
    dispatch(
      chatActions.setChosenChatDetails({
        chatDetails: { id, name: username },
        chatType: chatTypes.DIRECT,
      })
    );
  };
  return (
    <Button
      onClick={chooseActiveChat}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          color: "#8e9297",
          fontWeight: 700,
          marginLeft: "7px",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;
