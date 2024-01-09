import { Typography, styled } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#DCDDDE",
});

const SameDayMessageContent = styled("div")({
  width: "97%",
  color: "#DCDDDE",
});

const SameDayMessageText = styled("div")({
  marginLeft: "70px",
});

const Message = ({ content, name, sameAuthor, date, sameDay }) => {
  if (sameDay && sameAuthor) {
    return (
      <SameDayMessageContent>
        <SameDayMessageText>{content}</SameDayMessageText>
      </SameDayMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={name}></Avatar>
      </AvatarContainer>
      <MessageContainer>
        <Typography sx={{ fontSize: "16px", color: "white" }}>
          {name}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
